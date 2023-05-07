import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSidebarStore from "../store";

function SideBar() {
  const show = useSidebarStore((state) => state.sidebarShow);

  return (
    <div
      className="lg:w-1/5 lg:min-w-[20%] bg-dark top-10 min-h-screen absolute lg:static translate-x-[-100%] lg:translate-x-0 p-4 transition-all duration-500 z-50"
      style={ ((window.innerWidth <= 991) && show) ? {transform: 'translateX(0)'} : {} }
    >
      <div className="h-full w-full py-4 px-2 text-white border border-white flex flex-col gap-4">
        <div className="flex-grow">
          <img
            src="https://avatars.githubusercontent.com/u/85896478?v=4"
            alt="Abdul Rehman"
            className="rounded-full h-48 w-48 mx-auto border-4 border-primary-500 mb-2"
          />
          <h1 className="text-2xl font-semibold text-center">ard.</h1>
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
  );
}

export default SideBar;
