import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import posts from "../content/facebook-posts.json" with { type: "json" };

// Reuse the Neon client used by the application's Prisma adapter.
const adapterRequire = createRequire(import.meta.resolve("@prisma/adapter-neon"));
const { neon } = adapterRequire("@neondatabase/serverless");
const root = fileURLToPath(new URL("../", import.meta.url));
dotenv.config({ path: [resolve(root, ".env.local"), resolve(root, ".env")], quiet: true });

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  if (posts.length !== 6 || new Set(posts.map((post) => post.id)).size !== posts.length) {
    throw new Error("Expected six distinct reviewed Facebook articles.");
  }
  for (const post of posts) {
    if (!post.source.postId.startsWith("1211187308751612_") ||
        !post.image.startsWith("/blog/facebook/") ||
        !post.translations.en.detail || !post.translations.mm.detail) {
      throw new Error(`Invalid imported article: ${post.id}`);
    }
  }

  const sql = neon(process.env.DATABASE_URL);
  const existing = await sql`SELECT * FROM "Blog" ORDER BY "createdAt"`;
  const retiredIds = existing.filter((row) => !posts.some((post) => post.id === row.id)).map((row) => row.id);
  console.log(`${existing.length} existing rows; ${retiredIds.length} to retire; ${posts.length} Facebook articles to upsert.`);
  if (!process.argv.includes("--apply")) {
    console.log("Dry run. Pass --apply to back up and replace the Blog content in one transaction.");
    return;
  }

  const backupDirectory = resolve(root, ".blog-backups");
  await mkdir(backupDirectory, { recursive: true, mode: 0o700 });
  const backup = resolve(backupDirectory, `before-facebook-${new Date().toISOString().replaceAll(":", "-")}.json`);
  await writeFile(backup, JSON.stringify(existing, null, 2) + "\n", { mode: 0o600 });

  await sql.transaction([
    // Only remove the reviewed snapshot; do not erase any concurrently created post.
    sql`DELETE FROM "Blog" WHERE id = ANY(${retiredIds}::text[])`,
    ...posts.map((post) => sql`
      INSERT INTO "Blog" (id, translations, image, "createdAt", "updatedAt")
      VALUES (${post.id}, ${JSON.stringify(post.translations)}::jsonb, ${post.image}, ${post.createdAt}::timestamp, ${post.updatedAt}::timestamp)
      ON CONFLICT (id) DO UPDATE SET
        translations = EXCLUDED.translations, image = EXCLUDED.image,
        "createdAt" = EXCLUDED."createdAt", "updatedAt" = EXCLUDED."updatedAt"
    `),
  ]);
  const rows = await sql`SELECT id FROM "Blog" ORDER BY id`;
  if (posts.some((post) => !rows.some((row) => row.id === post.id)) ||
      rows.some((row) => retiredIds.includes(row.id))) {
    throw new Error("Post-import verification failed.");
  }
  console.log(`Verified ${rows.length} database articles. Previous rows backed up locally.`);
}

main().catch((error) => {
  // Connection errors can contain credentials; keep those out of command output.
  console.error(error.message.replace(/postgres(?:ql)?:\/\/[^\s]+/g, "[redacted database URL]"));
  process.exitCode = 1;
});
