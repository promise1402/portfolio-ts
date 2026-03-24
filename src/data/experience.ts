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
  location: "Agra, UP",
  dateRange: "Jul 2025 - Jan 2026",
  role: "Software Development Engineer - Intern",
  highlights: [
    "Worked on the development of an in-house CRM system and internal tools used for day-to-day business operations.",
    "Designed and implemented core features while gaining practical experience in full-stack development and team collaboration.",
  ],
  tags: ["CRM Systems", "Internal Tools", "React.js", "Node.js", "MongoDB", "Team Collaboration"],
};
