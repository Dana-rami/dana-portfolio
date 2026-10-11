export type EducationItem = {
  id: string
  institution: string
  major: string
  startDate: string
  expectedGraduation: string
  gpa: string
}

export const education: EducationItem[] = [
  {
    id: "annajah-computer-engineering",
    institution: "An-Najah National University",
    major: "Computer Engineering",
    startDate: "September 2022",
    expectedGraduation: "January 2027",
    gpa: "3.19",
  },
]
