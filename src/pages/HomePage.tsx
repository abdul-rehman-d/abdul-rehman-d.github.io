import Navbar from "../components/Navbar"
import AboutSection from "../components/sections/AboutSection"
import HomeSection from "../components/sections/HomeSection"
import ProjectSection from "../components/sections/ProjectSection"
import Stars from "../components/Stars"

function HomePage() {
  return (
    <div className="bg-dark relative w-screen h-screen overflow-y-hidden">
      <main className="flex flex-row w-full h-full">
        <div className="w-1/5 hidden lg:block p-4">
          <div className="h-full w-full text-white border border-white">
            <h1 className="text-2xl font-semibold text-center">ard.</h1>
          </div>
        </div>
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