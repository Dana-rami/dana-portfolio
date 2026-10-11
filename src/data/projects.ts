export const projectFilters = [
  "All",
  "Backend",
  "Web",
  "Java",
  "Database",
  "AI",
] as const

export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  id: string
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  categories: Exclude<ProjectFilter, "All">[]
}

/**
 * Add a new project by copying an object below.
 * Keep technologies limited to what exists in the repository.
 */
export const projects: Project[] = [
  {
    id: "ai-tictactoe",
    name: "AI-TicTacToe",
    description:
      "AI-powered Tic-Tac-Toe game implementing Alpha-Beta Pruning and Machine Learning evaluation.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "Maven",
      "Alpha-Beta Pruning",
    ],
    githubUrl: "https://github.com/Dana-rami/AI-TicTacToe",
    categories: ["AI", "Java", "Web"],
  },
  {
    id: "library-management-system",
    name: "Library-Management-System",
    description:
      "Java Library Management System implementing Repository, Observer, and Strategy design patterns.",
    technologies: ["Java", "Repository", "Observer", "Strategy"],
    githubUrl: "https://github.com/Dana-rami/Library-Management-System",
    categories: ["Java"],
  },
  {
    id: "golden-health-gym",
    name: "Golden-Health-GYM",
    description:
      "Fitness web platform with courses, BMI calculator, e-commerce store, and PHP/MySQL backend.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/Dana-rami/Golden-Health-GYM",
    categories: ["Web", "Backend"],
  },
  {
    id: "paradise-resort-database-system",
    name: "Paradise-Resort-Database-System",
    description:
      "Resort database management system using PostgreSQL, Java, JDBC, and JasperReports.",
    technologies: ["Java", "PostgreSQL", "JDBC", "JasperReports"],
    githubUrl: "https://github.com/Dana-rami/Paradise-Resort-Database-System",
    categories: ["Database", "Java", "Backend"],
  },
]
