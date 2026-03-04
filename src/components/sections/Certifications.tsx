import { Shuffle } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Achievements</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="Certifications"
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
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="shadow-none border border-gray-200 rounded-2xl bg-white hover:border-gray-300 transition-all duration-300 group"
            >
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                        <Award className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 shrink-0"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  <Badge className="w-fit bg-gray-50 text-gray-700 hover:bg-gray-100 border-0 rounded-full px-4 py-1.5 text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {cert.date}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;










