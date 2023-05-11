import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SideBar() {
  const [ show, setShow ] = useState(false);

  function toggleShow() { setShow(curr => !curr) }

  return (
    <>
    {(window.innerWidth <= 991) && (
      <div
        className="fixed top-0 left-0 w-16 h-16 py-4 px-6 z-50 text-white text-3xl"
        onClick={toggleShow}
      >
        {
        show
        ? <FontAwesomeIcon icon={faClose} />
        : <FontAwesomeIcon icon={faBars} />
        } 
      </div>
    )}
    <div
      className="w-60 lg:w-1/5 lg:min-w-[20%] bg-dark fixed lg:sticky left-0 top-0 h-screen translate-x-[-150%] lg:translate-x-0 p-4 transition-all duration-500 z-40"
      style={ ((window.innerWidth <= 991) && show) ? {transform: 'translateX(0)'} : {} }
    >
      <div className="h-full w-full py-4 px-2 text-white border border-slate-300 flex flex-col gap-4">
        <div className="flex-grow flex flex-col gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/85896478?v=4"
            alt="Abdul Rehman"
            className="rounded-full h-48 w-48 mx-auto border-4 border-primary-500 mb-2"
          />
          <h1 className="text-2xl font-semibold text-center">ard.</h1>
          <p className="text-center">Full Stack Developer<br/>React | Next | React Native</p>
          <div className="flex justify-center gap-2">
            <span className="text-primary-400">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
        <div className="text-2xl font-semibold gap-x-2 flex flex-row justify-center">
          <a href="https://www.linkedin.com/in/abdul-rehman-d/" target='_blank' className="hover:text-primary-400">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/abdul-rehman-d/" target='_blank' className="hover:text-primary-400">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:ar618211@outlook.com" target='_blank' className="hover:text-primary-400">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default SideBar;
