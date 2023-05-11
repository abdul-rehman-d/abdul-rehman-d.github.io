import { forwardRef, useState } from "react"
import Options from "@ui/Options"
import Introduction from "./subcomponents/Introduction"
import WorkHistory from "./subcomponents/WorkHistory"
import EducationHistory from "./subcomponents/EducationHistory"

const AboutSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section className='section-wrapper' id="about" ref={ref}>
      <h1 className='section-heading'>About Me</h1>
      <div className="flex flex-col w-full h-full pt-2 lg:pt-4 px-0 lg:px-16 justify-center gap-8">
        <Introduction />
        <EducationHistory />
        <WorkHistory />
      </div>
    </section>
  )
})

export default AboutSection