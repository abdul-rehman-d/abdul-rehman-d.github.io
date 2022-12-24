import { useState } from "react"
import Options from "@ui/Options"
import Introduction from "./subcomponents/Introduction"
import WorkHistory from "./subcomponents/WorkHistory"
import EducationHistory from "./subcomponents/EducationHistory"

const AboutSection = () => {
  const options: Option[] = [
    {label: 'Introduction', value: 'introduction'},
    {label: 'Work History', value: 'work-history'},
    {label: 'Education', value: 'education'},
  ]

  const [selected, setSelected] = useState(options[0])

  return (
    <section className='section-wrapper' id="about">
      <h1 className='section-heading'>About Me</h1>
      <div className="b-red flex flex-col md:flex-row w-full h-full pt-2 lg:pt-16 px-0 lg:px-16 justify-center">
        <div className="min-w-fit">
          <Options
            options={options}
            selected={selected}
            setSelected={setSelected}
            name='about-section-tab-switcher'
            vertical
            pillShaped={false}
          />
        </div>
        <div className="flex-grow w-full md:w-[unset]">
          {
            selected.value === 'introduction' ?
            <Introduction />
            :
            selected.value === 'work-history' ?
            <WorkHistory />
            :
            selected.value === 'education' ?
            <EducationHistory />
            :
            null
          }
        </div>
      </div>
    </section>
  )
}

export default AboutSection