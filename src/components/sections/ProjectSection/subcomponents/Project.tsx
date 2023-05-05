import { Link } from "react-router-dom"

type ProjectProps = {
  project: Project,
}

const Project = ({ project }: ProjectProps ) => {
  return (
    <Link to={`/project/${project.id}`} className="basis-1/4 max-w-max flex flex-col bg-dark shadow-2xl rounded-lg overflow-hidden cursor-pointer">
      <img src={project.thumbnail} alt="" />
      <div className="flex-grow flex flex-col justify-between">
        <h4 className="font-semibold p-2">{project.title}</h4>
        <div className="flex flex-row flex-wrap gap-2 p-2 self-end justify-self-end">
          {project.technologies.map((technology) => (
            <span className="text-xs bg-primary-700 px-2 py-1 font-bold rounded-xl">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project