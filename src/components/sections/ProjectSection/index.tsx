import { useEffect, useState } from "react"
import Options from "@ui/Options"
import rawProjects from "../../../assets/projects";
import Project from "./subcomponents/Project";

type projectsObj = {string: Project[];} | any 

const ProjectSection = () => {
  const options: Option[] = [
    {label: 'Featured', value: 'featured'},
    {label: 'Apps', value: 'apps'},
    {label: 'Web Apps', value: 'web-apps'},
    {label: 'Landing Pages', value: 'landing-pages'},
  ]

  const [selected, setSelected] = useState(options[options.length-1])
  const [projects, setProjects] = useState<projectsObj>({})

  useEffect(() => {
    const parsedProjects : projectsObj = {}
    rawProjects.forEach(project => {
      project.type.forEach((type: string) => {
        if (parsedProjects[type]) parsedProjects[type].push(project)
        else parsedProjects[type] = [project]
      })
    })
    console.log(parsedProjects);
    setProjects(parsedProjects)
  }, [rawProjects])

  return (
    <section className="section-wrapper">
      <h1 className="section-heading">Projects</h1>
      {/* <Options
        options={options}
        selected={selected}
        setSelected={setSelected}
        name='projects-category-switcher'
        vertical={false}
        pillShaped
      /> */}
      <div className="flex flex-row flex-wrap gap-4 mt-4">
        {projects[selected.value] ?
          projects[selected.value].map((project: Project) => (
            <Project project={project} />
          ))
          :
          <p>No Projects Available...</p>
        }
      </div>
    </section>
  );
};

export default ProjectSection;
