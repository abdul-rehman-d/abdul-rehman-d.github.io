import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import rawProjects from "../assets/projects";
import Preview from '../components/Preview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectPage = () => {
  // router stuff
  const navigate = useNavigate()
  const { projectId } = useParams()

  // states
  const [projectDetails, setProjectDetails] = useState<Project>()

  // useEffects
  useEffect(() => {
    if (!projectId) return
    const projectDeets = rawProjects.find(project => project.id === parseInt(projectId))
    if (projectDeets) setProjectDetails(projectDeets)
  }, [projectId])

  return (
    <>
    <ToastContainer />
    <div className="bg-dark relative min-h-screen text-white py-8 md:py-16 overflow-x-hidden">
      <div className="px-4 md:px-16 lg:px-64">
        <button onClick={() => navigate(-1)} className='text-primary-400 text-3xl rounded-full hover:bg-opacity-20 hover:bg-primary-500 aspect-square w-10'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className='flex flex-row justify-between py-4'>
          <h2 className='text-4xl font-bold'>{projectDetails?.title}</h2>
        </div>
        <div>
          <p>{projectDetails?.description}</p>
        </div>
        <div className='flex flex-row gap-4 py-4'>
          <a
            href={projectDetails?.sourceCodeLink}
            className="primary-button"
          >
            Source Code
          </a>
          <a
            href={projectDetails?.livePreviewLink}
            className="primary-button"
          >
            Live Demo
          </a>
        </div>
      </div>
      <main className='py-4'>
        {(projectDetails && projectDetails.livePreviewLink) ? 
          <Preview url={projectDetails.livePreviewLink} title={projectDetails.title} />
          : null
        }
      </main>
    </div>
    </>
  )
}

export default ProjectPage