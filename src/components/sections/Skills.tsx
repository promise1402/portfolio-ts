import { useState } from "react";
import { AnimatedList, FlowingMenu, Shuffle } from "@/components/animations";
import { skills } from "@/data/skill";

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <section
      id="skills"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-9 md:py-10 lg:py-12 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col items-start gap-3 mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Abilities</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="My Skills"
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

        <div className="w-full space-y-2">
          {skills.map((category) => {
            const isOpen = openCategory === category.id;
            return (
              <div key={category.id} className="w-full overflow-hidden rounded-2xl">
                <div
                  className="cursor-pointer transition-all duration-300 border border-gray-200/70 rounded-2xl hover:border-indigo-300/80 hover:shadow-md flex items-center"
                  style={{
                    height: "82px",
                    position: "relative",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCategory(category.id);
                  }}
                >
                  <FlowingMenu
                    items={[
                      {
                        link: "",
                        text: category.title,
                        image: `https://picsum.photos/600/400?random=${category.id}`,
                      },
                    ]}
                    speed={12}
                    textColor="#1e293b"
                    bgColor="rgba(255, 255, 255, 0.9)"
                    marqueeBgColor="rgba(255, 255, 255, 0.95)"
                    marqueeTextColor="#1e293b"
                    borderColor="rgba(148, 163, 184, 0.3)"
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    isOpen
                      ? "max-h-150 opacity-100 py-1 px-1 bg-linear-to-b from-slate-50 to-white"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full h-full min-h-5">
                    <AnimatedList
                      items={category.skills}
                      onItemSelect={(item, index) => console.log(item, index)}
                      showGradients={false}
                      enableArrowNavigation
                      displayScrollbar
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;









