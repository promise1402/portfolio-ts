export type EducationItem = {
  institution: string;
  location: string;
  dateRange: string;
  degree: string;
  scoreLabel: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    institution: "Raj Kumar Goel Institute of Technology",
    location: "Ghaziabad, Uttar Pradesh",
    dateRange: "Jul 2019 - Jun 2023",
    degree: "Bachelor of Technology - (CSE)",
    scoreLabel: "GPA: 8.1",
    description:
      "During my undergraduate studies, I gained a strong foundation in computer science principles and programming languages. I also participated in coding competitions and projects that enhanced my practical skills.",
  },
  {
    institution: "RPM Academy",
    location: "Kauriram",
    dateRange: "Mar 2018 - May 2019",
    degree: "Intermediate",
    scoreLabel: "Percentage: 92%",
    description:
      "During my intermediate studies, I built a strong foundation in problem-solving, logical reasoning, and analytical thinking through consistent academic learning.",
  },
];
