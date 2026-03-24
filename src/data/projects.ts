export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  codeLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Finance Manager",
    description:
      "Full-stack finance app with secure authentication and expense tracking. Supports expense categorization with a responsive UI.",
    techStack: ["TypeScript", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://finance-frontend-gilt.vercel.app/login",
    codeLink: "https://github.com/promise1402/finance-frontend",
  },
  {
    id: 2,
    title: "Dev Studio",
    description:
      "A modern freelancing website built with Next.js and TypeScript, featuring a responsive UI and client inquiry form.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://dev-studio-olive.vercel.app/",
    codeLink: "https://github.com/promise1402/dev-studio",
  },
  {
    id: 3,
    title: "Food Recipe App",
    description:
      "Responsive food recipe app using TheMealDB API to fetch and display recipes. Includes search functionality for easy recipe discovery.",
    techStack: ["React", "Redux", "API Integration"],
    demoLink: "https://food-recipe-app2-two.vercel.app/",
    codeLink: "https://github.com/promise1402/food-recipe-app",
  },
  {
    id: 4,
    title: "Movie App",
    description:
      "React-based responsive website displaying movies with key details. Shows title, genre, rating, and description for each movie.",
    techStack: ["TypeScript", "React", "Redux", "Tailwind CSS"],
    demoLink: "https://movie-app-omega-self.vercel.app/",
    codeLink: "https://github.com/promise1402/Movie-App",
  },
  {
    id: 5,
    title: "Invoice Generator",
    description:
      "Responsive React-based invoice generator for creating and customizing invoices. Allows users to download professional invoices easily.",
    techStack: ["React", "Tailwind CSS"],
    demoLink: "https://invoice-generator-two-lac.vercel.app/",
    codeLink: "https://github.com/promise1402/invoice-generator",
  },
  {
    id: 6,
    title: "Shopping Cart",
    description:
      "Simple, user-friendly web app for selecting products and adding them to a cart. Provides a smooth shopping experience with basic cart functionality.",
    techStack: ["React"],
    codeLink: "https://github.com/promise1402/shopping-cart",
  },
];
