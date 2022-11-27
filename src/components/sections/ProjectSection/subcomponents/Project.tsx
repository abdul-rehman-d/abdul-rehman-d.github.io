
type ProjectProps = {
  project: Project,
}

const Project = ({ project }: ProjectProps ) => {
  return (
    <div>
      {project.title}
    </div>
  )
}

export default Project