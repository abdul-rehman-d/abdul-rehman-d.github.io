import { forwardRef } from "react"

const HomeSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='min-h-screen flex items-center section-wrapper py-0 md:gap-10 relative overflow-hidden' id="home">
      <div className="flex flex-col p-2 gap-2 text-center md:text-left z-10 bg-dark">
        <p className="text-white text-3xl w-full md:w-fit">Hello, I am</p>
        <h1 className="text-primary-400 text-5xl">Abdul Rehman Daniyal</h1>
        <h1 className="text-primary-600 text-3xl w-full md:w-fit">A Frontend Developer</h1>
      </div>
      {/* <div className="flex-grow md:flex flex-row justify-end hidden">
        <div className="border-[0.75rem] border-primary-400 flex justify-center items-center w-64 h-64 bg-dark z-10">
          <span
            className={`rounded-full w-40 h-40 bg-primary-500 block relative overflow-hidden
            before:content-[''] before:bg-primary-600 before:top-[-2rem] before:bottom-0 before:h-64 before:w-10 before:-rotate-45 before:right-7 before:absolute
            after:content-[''] after:bg-primary-700 after:top-[-2rem] after:bottom-0 after:h-64 after:w-10 after:-rotate-45 after:left-9 after:absolute
            `}
          />
        </div>
      </div> */}
    </div>
  )
})

export default HomeSection