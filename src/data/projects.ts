export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  demoLink?: string
  codeLink: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Budget Tracker',
    description:
      'A user-friendly expense management app with secure authentication, budget tracking, and expense categorization features.',
    techStack: ['TypeScript', 'React', 'Redux'],
    demoLink: 'https://budget-tracker-five-pi.vercel.app/login',
    codeLink: 'https://github.com/promise1402/budget-tracker',
  },
  {
    id: 2,
    title: 'Dev Studio',
    description:
      'A modern freelancing website built with Next.js and TypeScript, featuring a responsive UI and client inquiry flow.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://dev-studio-olive.vercel.app/',
    codeLink: 'https://github.com/promise1402/dev-studio',
  },
  {
    id: 3,
    title: 'Invoice Generator',
    description:
      'A responsive React-based invoice generator for creating, customizing, and downloading professional invoices.',
    techStack: ['React', 'Tailwind CSS'],
    demoLink: 'https://invoice-generator-two-lac.vercel.app/',
    codeLink: 'https://github.com/promise1402/invoice-generator',
  },
  {
    id: 4,
    title: 'Food Recipe App',
    description:
      'A responsive food recipe application using TheMealDB API to fetch and display recipes with search functionality.',
    techStack: ['React', 'Redux', 'API Integration'],
    demoLink: 'https://food-recipe-app2-two.vercel.app/',
    codeLink: 'https://github.com/promise1402/food-recipe-app',
  },
  {
    id: 5,
    title: 'Movie App',
    description:
      'A React-based responsive website displaying movies with details like title, genre, rating, and description.',
    techStack: ['TypeScript', 'React', 'Redux', 'Tailwind CSS'],
    demoLink: 'https://movie-app-omega-self.vercel.app/',
    codeLink: 'https://github.com/promise1402/Movie-App',
  },
  {
    id: 6,
    title: 'Shopping Cart',
    description:
      'A simple user-friendly web application for selecting items from a product page and adding them to a shopping cart.',
    techStack: ['React'],
    codeLink: 'https://github.com/promise1402/shopping-cart',
  },
]
