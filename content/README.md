# Journal articles

## Original articles

`journal-posts.json` contains original portfolio articles, including the bilingual
Data Analysis Workflow post approved on November 16, 2026. Its supplied infographic
is stored at `public/blog/data-analysis-workflow.webp`. Myanmar article wording and
the approved hashtag footer are retained, with semantic headings and lists for the
website and a complete English translation.

`lib/defaultBlogs.ts` combines this collection with the Facebook import below.
The existing journal listing, article lookup, metadata, and sitemap include both
collections alongside database posts. Adding an original article does not require
running the Facebook replacement script or changing existing database rows.

## Facebook import

`facebook-posts.json` contains six educational posts retrieved from the connected
Cloud Nine Innovations Facebook Page on November 14, 2026. The available connector
history covered October 16–November 14, 2026. Older Page history could not be
verified because the connector limits history to 30 days and the browser required
Facebook sign-in.

The selected posts explain database indexing, caching, cloud computing, software
architecture, the JavaScript event loop, and OOP. Promotional and marketing posts
are outside this import. Each entry keeps the original Facebook post ID, permalink,
publication time, and Myanmar article text, alongside a full English translation.
Facebook hashtag footers and requests to comment or share are omitted. Paragraphs
are formatted as article HTML.

The six original post images are stored in `public/blog/facebook/` as WebP files;
the website does not depend on expiring Facebook CDN image URLs.

The public journal merges database articles with this fallback collection. Keep
both copies consistent when replacing the collection. To inspect the database
replacement without changing it:

```sh
node scripts/replace-facebook-blogs.mjs
```

For an explicitly intended replacement of the Blog table:

```sh
node scripts/replace-facebook-blogs.mjs --apply
```

The script reads `DATABASE_URL` from the environment or `.env.local` / `.env`,
backs up existing rows to the ignored `.blog-backups/` directory, then retires the
reviewed old rows and upserts these six articles in a single transaction. Other
tables are not changed. Restore old database content from the JSON backup if a
rollback is needed; reverting Git alone does not restore database rows.
