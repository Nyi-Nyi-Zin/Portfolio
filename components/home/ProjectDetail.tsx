import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import type { ProjectItem } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function isUsableExternalUrl(url?: string) {
  return Boolean(url && url !== "#");
}

export default function ProjectDetail({ project }: { project: ProjectItem }) {
  const showLive = isUsableExternalUrl(project.liveUrl);
  const showGithub = isUsableExternalUrl(project.githubUrl);

  return (
    <div className="w-full flex flex-col items-center py-10 pb-20">
      <div className="w-full max-w-4xl px-5 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <Link href="/#projects">
            <Button
              variant="outline"
              className="group pl-0 hover:pl-2 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 aspect-video w-full max-h-[420px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          {project.featured && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 backdrop-blur-sm text-amber-900 text-xs font-bold shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {showLive && project.liveUrl && (
                <Button asChild size="sm" className="gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </Button>
              )}
              {showGithub && project.githubUrl && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Source code
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-300 whitespace-pre-wrap text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-medium px-2.5 py-1 bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-200 border-0"
                >
                  {tech.trim()}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
