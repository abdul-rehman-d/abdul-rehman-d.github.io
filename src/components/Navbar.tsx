import { faBars, faBriefcase, faClose, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"
import useSidebarStore from "../store";

function Navbar({ scrollTo } : { scrollTo: (hash: string) => void }) {
  const { sidebarShow, toggleSidebarShow } = useSidebarStore();

  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    const hash = e.currentTarget.hash
    scrollTo(hash.replace('#', ''))
  }

  return (
    <nav className="w-100 bg-dark text-white flex flex-row justify-between items-center py-4 lg:px-32 md:px-16 px-8 relative z-10">
      <div>
        {window.innerWidth <= 991 && (
          <button onClick={toggleSidebarShow}>
            {!sidebarShow
            ? <FontAwesomeIcon icon={faBars} />
            : <FontAwesomeIcon icon={faClose} />
            }
          </button>
        )}
      </div>
      <ul className="flex flex-row gap-4">
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#home'}} onClick={onClick}>
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#about'}} onClick={onClick}>
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#projects'}} onClick={onClick}>
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar