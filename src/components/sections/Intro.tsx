import TextPressure from "@/components/effects/TextPressure";

const Intro = () => {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-6 lg:gap-8">
        <div className="relative w-full max-w-4xl">
          <TextPressure text="HELLO!!" flex weight minFontSize={36} textColor="rgba(0,0,0,0.10)" />
        </div>

        <div className="w-full max-w-6xl">
          <TextPressure text="I AM PROMISE PAL" flex weight minFontSize={34} textColor="#111827" />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 sm:w-auto"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-gray-300 bg-white/80 px-6 py-2.5 text-sm font-medium text-gray-800 backdrop-blur transition-colors hover:bg-gray-50 sm:w-auto"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
