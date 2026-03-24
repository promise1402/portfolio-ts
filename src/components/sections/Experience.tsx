import { Shuffle } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Career</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="Work Experience"
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

        <Card className="shadow-none border border-gray-200 rounded-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8 border-t-2 border-t-indigo-500/70">
            <div className="flex flex-col gap-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{experience.company}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{experience.location}</p>
                </div>
                <Badge variant="outline" className="text-sm text-gray-500 border-gray-300 rounded-full px-4 py-1.5">
                  {experience.dateRange}
                </Badge>
              </div>

              <div className="w-full h-px bg-gray-100" />

              <div className="flex flex-col gap-4">
                <Badge className="w-full whitespace-normal break-words rounded-2xl bg-indigo-50 px-4 py-1.5 text-center text-sm font-medium leading-relaxed text-indigo-600 hover:bg-indigo-50 sm:w-fit sm:rounded-full">
                  {experience.role}
                </Badge>

                <ul className="flex flex-col gap-3">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs rounded-full bg-gray-100 text-gray-600 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;










