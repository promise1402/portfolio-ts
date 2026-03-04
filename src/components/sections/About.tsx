import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            I am a passionate software developer with a strong focus on frontend development and a solid foundation in
            computer science. I completed my Bachelor&apos;s in Computer Science from Raj Kumar Goel Institute of
            Technology in 2023 with a GPA of 8.1, where I built my base in core CS concepts and problem-solving.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            My toolkit includes{" "}
            <span className="font-semibold text-gray-900">TypeScript, JavaScript, React, Node, Express, and Redux</span>,
            along with modern UI systems like Tailwind, Material UI, and Shadcn-inspired components. I enjoy creating
            responsive, accessible interfaces that feel clean and intuitive to use.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            Currently, I am working as a Software Development Engineer Intern at One Place Solar, building an in-house
            CRM and internal tools from scratch. That experience has helped me understand how design decisions, APIs,
            and UX come together in real products.
          </p>

          <Card className="shadow-none border border-gray-200 rounded-2xl bg-white/80 backdrop-blur">
            <CardContent className="pt-6 pb-6 px-5 sm:px-6 flex flex-col gap-3">
              <Badge className="w-fit bg-emerald-50 text-emerald-700 hover:bg-emerald-50 rounded-full px-4 py-1.5 text-xs font-medium">
                Open to new opportunities
              </Badge>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                I am actively exploring roles in frontend and full-stack development where I can contribute to
                real-world products, collaborate with strong teams, and keep growing as an engineer.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium w-fit hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;









