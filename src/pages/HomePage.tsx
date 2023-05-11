import { useRef } from "react"
import Navbar from "../components/Navbar"
import AboutSection from "../components/sections/AboutSection"
import HomeSection from "../components/sections/HomeSection"
import ProjectSection from "../components/sections/ProjectSection"
import SideBar from "../components/SideBar"

function HomePage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  const scrollTo = (hash: string) => {
    if (window === null) return
    switch (hash) {
      case 'home':
        if (homeRef.current === null) return
        window.scrollTo({
          top: homeRef.current.offsetTop,
          behavior: 'smooth'
        })
        break;
      case 'about':
        if (aboutRef.current === null) return
        window.scrollTo({
          top: aboutRef.current?.offsetTop,
          behavior: 'smooth'
        })
        break;
      case 'projects':
        if (projectsRef.current === null) return
        window.scrollTo({
          top: projectsRef.current?.offsetTop,
          behavior: 'smooth'
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-dark relative">
      <main className="flex flex-row w-full h-full">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <div className="flex-grow" ref={wrapperRef}>
            <HomeSection ref={homeRef} />
            <AboutSection ref={aboutRef} />
            <ProjectSection ref={projectsRef} />
          </div>
        </div>
        <Navbar scrollTo={scrollTo} />
      </main>
    </div>
  )
}

export default HomePage