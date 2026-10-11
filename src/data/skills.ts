export type SkillCategory = {
  id: string
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    items: ["Python", "Java", "C/C++", "PHP", "SQL", "VHDL", "Verilog"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Flutter"],
  },
  {
    id: "tools",
    title: "Development Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux/Ubuntu"],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    items: ["Cursor", "Claude", "ChatGPT"],
  },
]
