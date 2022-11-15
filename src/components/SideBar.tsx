import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
  return (
    <div className="w-1/5 hidden lg:block p-4">
      <div className="h-full w-full py-4 px-2 text-white border border-white flex flex-col justify-between">
        <h1 className="text-2xl font-semibold text-center">ard.</h1>
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
