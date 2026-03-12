const About = () => {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-indigo-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">About</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
              A bit about <span className="text-indigo-500">who I am.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            Recently, I worked as a{" "}
            <span className="font-semibold text-gray-900">Software Development Engineer Intern at One Place Solar</span>,
            where I helped build <span className="font-semibold text-gray-900">internal tools and a CRM system</span>,
            gaining hands-on experience with real-world product development.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            I graduated with a <span className="font-semibold text-gray-900">B.Tech in Computer Science</span> from{" "}
            <span className="font-semibold text-gray-900">Raj Kumar Goel Institute of Technology</span> with a{" "}
            <span className="font-semibold text-gray-900">GPA of 8.1</span>, which gave me a strong foundation in
            computer science and problem-solving.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            My core stack includes{" "}
            <span className="font-semibold text-gray-900">React, TypeScript, Redux, Node.js, and Express</span>, and I
            enjoy building <span className="font-semibold text-gray-900">scalable, responsive, and user-friendly web applications</span>{" "}
            with clean UI and solid backend integration.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            I&apos;m continuously improving my problem-solving skills and staying current with modern technologies, and
            I&apos;m actively seeking <span className="font-semibold text-gray-900">Frontend or Full-Stack Developer</span>{" "}
            opportunities where I can contribute and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;









