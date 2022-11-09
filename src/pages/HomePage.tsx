import Navbar from "../components/Navbar"
import AboutSection from "../components/sections/AboutSection"
import HomeSection from "../components/sections/HomeSection"

function HomePage() {
  return (
    <div className="bg-dark">
      <Navbar />
      <HomeSection />
      <AboutSection />
    </div>
  )
}

export default HomePage