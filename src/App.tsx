import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Activities } from "./sections/Activities"
import { Certificates } from "./sections/Certificates"
import { Contact } from "./sections/Contact"
import { Education } from "./sections/Education"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Activities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
