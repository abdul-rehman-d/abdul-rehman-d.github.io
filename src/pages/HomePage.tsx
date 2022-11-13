import { useRef } from "react"
import Navbar from "../components/Navbar"
import AboutSection from "../components/sections/AboutSection"
import HomeSection from "../components/sections/HomeSection"
import ProjectSection from "../components/sections/ProjectSection"
import star from '../assets/star.png'

function HomePage() {
  const containerRef = useRef(null)
  return (
    <div className="bg-dark relative w-screen h-screen overflow-y-auto" ref={containerRef}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <div className="fixed inset-0">
        {Array(window.innerWidth < 779 ? 20 : window.innerWidth > 991 ? 35 : 50).fill(0).map(() => (
          <img
            src={star}
            className='absolute w-10 h-10 z-0 animate-pulse'
            style={{
              top: Math.floor(Math.random()*window.innerHeight-400/10),
              left: Math.floor(Math.random()*window.innerWidth-400/10),
              rotate: `${Math.floor(Math.random()*90-1)}deg`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage