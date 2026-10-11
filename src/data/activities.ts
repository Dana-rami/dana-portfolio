export type Activity = {
  id: string
  organization: string
  role: string
  activity: string
  date: string
  description: string
  sourceUrl: string
}

/**
 * Activities announced on LinkedIn. Add future items here.
 */
export const activities: Activity[] = [
  {
    id: "ain-challenges-2026",
    organization: "Arab Innovation Network (AIN)",
    role: "Volunteer",
    activity: "Ain Challenges Hackathon 2026",
    date: "August 2026",
    description:
      "Volunteered at Ain Challenges Hackathon 2026 with the Arab Innovation Network (AIN) at Birzeit University, supporting teams working on real-world challenges in a 24-hour event.",
    sourceUrl:
      "https://www.linkedin.com/posts/dana-zaben-3b5489284_ainhackathon2026-innovation-hackathon-activity-7495514903143739393-6hPG",
  },
  {
    id: "quantum-hackathon-2026",
    organization: "An-Najah Innovation Park – An-Najah National University",
    role: "Innovation Ambassador",
    activity: "4th Palestinian Quantum Computing Hackathon",
    date: "February 2026",
    description:
      "Participated as an Innovation Ambassador at An-Najah Innovation Park and volunteered at the 4th Palestinian Quantum Computing Hackathon. The first final stage was held at An-Najah Innovation Park, organized in collaboration with Palestinian universities and the Ministry of Telecommunications and Digital Economy through the Technology Innovation Center.",
    sourceUrl:
      "https://www.linkedin.com/posts/dana-zaben-3b5489284_innovation-quantumcomputing-volunteering-activity-7427023958929149952-nu_9",
  },
]
