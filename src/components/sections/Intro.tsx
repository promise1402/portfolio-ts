import TextPressure from "@/components/effects/TextPressure";

const Intro = () => {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl flex flex-col items-center text-center gap-6">
        <div className="relative w-full max-w-4xl">
          <TextPressure text="HELLO!!" flex weight minFontSize={36} textColor="rgba(0,0,0,0.10)" />
        </div>

        <div className="w-full max-w-6xl">
          <TextPressure text="I AM PROMISE PAL" flex weight minFontSize={34} textColor="#111827" />
        </div>

        <p className="max-w-3xl text-base sm:text-lg md:text-2xl leading-relaxed text-gray-600">
          I am a software developer focused on building clean, responsive, and user-friendly web applications. I enjoy
          working with modern frontend technologies like React and TypeScript, and I love turning ideas into reliable,
          real-world products.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-gray-800 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-800 px-6 py-2.5 text-sm font-medium bg-white/80 backdrop-blur hover:bg-gray-50 transition-colors"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;









