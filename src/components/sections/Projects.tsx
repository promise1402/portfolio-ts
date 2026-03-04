import { Shuffle } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Portfolio</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="My Projects"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="shadow-none border border-gray-200 rounded-2xl bg-white/95 backdrop-blur-sm hover:border-indigo-300 hover:bg-indigo-50/40 transition-all duration-300 group"
            >
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={`${project.id}-${tech}`}
                        variant="secondary"
                        className="text-xs rounded-full bg-gray-100 text-gray-600 px-3 py-1 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;










