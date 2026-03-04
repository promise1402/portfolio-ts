export type ExperienceItem = {
  company: string;
  location: string;
  dateRange: string;
  role: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem = {
  company: "One Place Solar",
  location: "Agra, Uttar Pradesh",
  dateRange: "Jul 2025 - Jan 2026",
  role: "SDE - Intern",
  highlights: [
    "Contributed to the development of an in-house CRM system and internal tools by working on feature design, implementation, and UI integration.",
    "Gained hands-on experience in full-stack development while collaborating with cross-functional teams and following industry best practices.",
  ],
  tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "REST APIs"],
};
