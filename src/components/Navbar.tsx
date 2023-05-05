import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-100 bg-dark text-white flex flex-row justify-end items-center py-4 lg:px-32 md:px-16 px-8 relative z-10">
      <ul className="flex flex-row gap-4">
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#home'}}>
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#about'}}>
            About
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-primary-400">
          <NavLink to={{hash: '#projects'}}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar