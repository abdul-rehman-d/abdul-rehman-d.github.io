
function Navbar() {
  return (
    <nav className="w-100 bg-transparent text-white flex flex-row justify-between items-center py-4 lg:px-32 md:px-16 px-8">
      <h1 className="text-2xl font-semibold">ard.</h1>
      <ul className="flex flex-row gap-4">
        <li className="cursor-pointer hover:text-primary-400">Home</li>
        <li className="cursor-pointer hover:text-primary-400">About</li>
        <li className="cursor-pointer hover:text-primary-400">Projects</li>
        <li className="cursor-pointer hover:text-primary-400">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar