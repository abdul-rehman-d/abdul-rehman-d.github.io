import { faBriefcase, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"

function Navbar({ scrollTo } : { scrollTo: (hash: string) => void }) {

  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const hash = e.currentTarget.hash
    scrollTo(hash.replace('#', ''))
  }

  return (
    <nav className="sticky top-0 h-screen w-10 bg-dark text-white flex flex-col justify-center items-center px-8 z-10">
      <ul className="flex flex-col gap-4 text-3xl">
        <li className="cursor-pointer flex justify-center hover:text-primary-400">
          <NavLink to={{hash: '#home'}} onClick={onClick}>
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </li>
        <li className="cursor-pointer flex justify-center hover:text-primary-400">
          <NavLink to={{hash: '#about'}} onClick={onClick}>
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </li>
        <li className="cursor-pointer flex justify-center hover:text-primary-400">
          <NavLink to={{hash: '#projects'}} onClick={onClick}>
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar