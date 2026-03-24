export type SkillCategory = {
  id: number;
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    id: 2,
    title: "Frontend",
    skills: ["React.js", "Redux", "Shadcn UI", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: 3,
    title: "Backend",
    skills: [
      "Node.js",
      "REST APIs",
      "Authentication",
      "Middleware",
      "MVC Architecture",
    ],
  },
  {
    id: 4,
    title: "Frameworks",
    skills: ["Next.js", "Express.js"],
  },
  {
    id: 5,
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    id: 6,
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Mongoose"],
  },
];
