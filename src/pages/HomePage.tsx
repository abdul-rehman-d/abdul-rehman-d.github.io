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
    if (wrapperRef.current === null) return
    switch (hash) {
      case 'home':
        if (homeRef.current === null) return
        wrapperRef.current.scrollTo({
          top: homeRef.current.offsetTop,
          behavior: 'smooth'
        })
        break;
      case 'about':
        if (aboutRef.current === null) return
        wrapperRef.current?.scrollTo({
          top: aboutRef.current?.offsetTop,
          behavior: 'smooth'
        })
        break;
      case 'projects':
        if (projectsRef.current === null) return
        wrapperRef.current?.scrollTo({
          top: projectsRef.current?.offsetTop,
          behavior: 'smooth'
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-dark relative w-screen h-screen overflow-y-hidden">
      <main className="flex flex-row w-full h-full">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <Navbar scrollTo={scrollTo} />
          <div className="flex-grow overflow-y-auto custom-scrollbar" ref={wrapperRef}>
            <HomeSection ref={homeRef} />
            <AboutSection ref={aboutRef} />
            <ProjectSection ref={projectsRef} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage