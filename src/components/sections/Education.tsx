import { Shuffle } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Academic Journey</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="Education"
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

        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <Card key={item.institution} className="shadow-none border border-gray-200 rounded-2xl bg-white">
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8">
                <div className="flex flex-col gap-8">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{item.institution}</h3>
                        <p className="text-sm sm:text-base text-gray-500">{item.location}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-sm text-gray-600 border-gray-300 rounded-full px-4 py-1.5 bg-white"
                    >
                      {item.dateRange}
                    </Badge>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="w-full whitespace-normal break-words rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-center text-sm font-medium leading-relaxed text-indigo-700 hover:bg-indigo-100 sm:w-fit sm:rounded-full">
                        {item.degree}
                      </Badge>
                      <Badge className="w-fit bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 rounded-full px-4 py-1.5 text-sm font-medium">
                        <Award className="w-3.5 h-3.5 mr-1.5" />
                        {item.scoreLabel}
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-600">{item.description}</p>
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

export default Education;










