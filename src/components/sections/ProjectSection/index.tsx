import { useState } from "react"
import Options from "@ui/Options"

const ProjectSection = () => {
  const options: Option[] = [
    {label: 'Featured', value: 'Featured'},
    {label: 'Apps', value: 'apps'},
    {label: 'Web Apps', value: 'web-apps'},
    {label: 'Landing Pages', value: 'landing-pages'},
  ]

  const [selected, setSelected] = useState(options[0])

  return (
    <section className="section-wrapper">
      <h1 className="section-heading">Projects</h1>
      <Options
        options={options}
        selected={selected}
        setSelected={setSelected}
        name='projects-category-switcher'
        vertical={false}
        pillShaped
      />
    </section>
  );
};

export default ProjectSection;
