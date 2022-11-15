import Navbar from "../components/Navbar"
import AboutSection from "../components/sections/AboutSection"
import HomeSection from "../components/sections/HomeSection"
import ProjectSection from "../components/sections/ProjectSection"
import SideBar from "../components/SideBar"
import Stars from "../components/Stars"

function HomePage() {
  return (
    <div className="bg-dark relative w-screen h-screen overflow-y-hidden">
      <main className="flex flex-row w-full h-full">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <Navbar />
          <div className="flex-grow overflow-y-auto">
            <HomeSection />
            <AboutSection />
            <ProjectSection />
          </div>
          <Stars />
        </div>
      </main>
    </div>
  )
}

export default HomePage