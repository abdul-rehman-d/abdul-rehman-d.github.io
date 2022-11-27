import { useState } from "react"
import Options from "../../ui/Options"

const AboutSection = () => {
  const options: Option[] = [
    {label: 'Introduction', value: 'indroduction'},
    {label: 'Work History', value: 'work-history'},
    {label: 'Education', value: 'education'},
  ]

  const [selected, setSelected] = useState(options[0])

  return (
    <section className='section-wrapper'>
      <h1 className='section-heading'>About Me</h1>
      <div className="b-red flex flex-col w-full h-full py-16 justify-center items-center">
        <Options
          options={options}
          selected={selected}
          setSelected={setSelected}
          name='about-section-tab-switcher'
          vertical
          pillShaped={false}
        />
      </div>
    </section>
  )
}

export default AboutSection