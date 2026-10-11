import foplCertificate from "../assets/java.jpg"
import udacityFrontend from "../assets/fromt.jpg"
import levelFourEnglish from "../assets/certificates/level-four-english.png"
import levelOneEnglish from "../assets/certificates/level-one-english.png"
import levelThreeEnglish from "../assets/certificates/level-three-english.png"
import levelTwoEnglish from "../assets/certificates/level-two-english.png"

export type Certificate = {
  id: string
  name: string
  organization: string
  /**
   * Publicly verified month from LinkedIn posts when exact credential dates
   * were not available. Update if you have the official issue date.
   */
  date: string
  credentialUrl: string
  imageSrc: string
  previewImages?: string[]
  previewLabels?: string[]
  linkedinPostUrl?: string
  sourceNote: string
}

/**
 * Certificates announced on LinkedIn.
 * Fill credentialUrl and imageSrc when you have public credential pages or files.
 */
export const certificates: Certificate[] = [
  {
    id: "udacity-frontend-nanodegree",
    name: "Front-End Web Developer Nanodegree",
    organization: "Udacity",
    date: "July 2025",
    credentialUrl: "",
    imageSrc: udacityFrontend,
    linkedinPostUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7387490003372650496/",
    sourceNote: "",
  },
  {
    id: "prime-academy-fopl",
    name: "Fundamentals of Programming Languages (FOPL)",
    organization: "prime Academy",
    date: "February 2025",
    credentialUrl: "",
    imageSrc: foplCertificate,
    linkedinPostUrl:
      "https://www.linkedin.com/posts/dana-zaben-3b5489284_programming-coding-java-activity-7294419291842486272-E5En",
    sourceNote: "",
  },
  {
    id: "jugate-english",
    name: "Four Levels of English",
    organization: "JUGATE Academy",
    date: "September 2024 – April 2025",
    credentialUrl: "",
    imageSrc: "",
    previewImages: [
      levelOneEnglish,
      levelTwoEnglish,
      levelThreeEnglish,
      levelFourEnglish,
    ],
    previewLabels: ["Level One", "Level Two", "Level Three", "Level Four"],
    linkedinPostUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7387490003372650496/",
    sourceNote: "",
  },
]
