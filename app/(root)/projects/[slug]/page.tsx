import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/header/MainNavbar";
import Footer from "@/components/common/footer/Footer";
import ProjectDetail from "@/components/home/ProjectDetail";
import { getProjectBySlug, projects } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  const summary = project.description.split("\n").find(Boolean)?.trim() ?? "";
  return {
    title: `${project.title} | Projects`,
    description:
      summary.length > 160 ? `${summary.slice(0, 157)}…` : summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-zinc-50 dark:bg-[#0F172A] font-sans w-full lg:px-8 px-3 min-h-screen">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
