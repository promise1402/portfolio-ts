export type SkillCategory = {
  id: number
  title: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 2,
    title: 'Frontend',
    skills: [
      'React.js',
      'Redux',
      'Material UI',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    id: 3,
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication (JWT, bcrypt)',
      'Middleware',
      'MVC Architecture',
    ],
  },
  {
    id: 4,
    title: 'Databases',
    skills: ['MongoDB'],
  },
  {
    id: 5,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Mongoose'],
  },
]
