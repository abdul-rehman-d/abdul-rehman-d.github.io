import { useEffect, useRef, useState } from "react";
import star from './../../assets/star.png'

const HomeSection = () => {
  const containerRef = useRef(null)
  return (
    <div className='fill-remaining flex items-center lg:px-32 md:px-16 px-8 md:gap-10 relative overflow-hidden' ref={containerRef}>
      <div className="absolute inset-0">
        {Array(window.innerWidth < 779 ? 20 : window.innerWidth > 991 ? 35 : 50).fill(0).map(() => (
          <img
            src={star}
            className='absolute w-10 h-10 z-0 animate-pulse'
            style={{
              top: Math.floor(Math.random()*window.innerHeight-400/10),
              left: Math.floor(Math.random()*window.innerWidth-400/10),
              rotate: `${Math.floor(Math.random()*90-1)}deg`,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col p-2 md:p-0 gap-2 text-center md:text-left z-10">
        <p className="text-white text-3xl bg-dark w-full md:w-fit">Hello, I am</p>
        <h1 className="text-primary-400 text-5xl bg-dark">Abdul Rehman Daniyal</h1>
        <h1 className="text-primary-600 text-3xl bg-dark w-full md:w-fit">A Frontend Developer</h1>
      </div>
      <div className="flex-grow md:flex flex-row justify-end hidden">
        <div className="border-[0.75rem] border-primary-400 flex justify-center items-center w-64 h-64 bg-dark z-10">
          <span
            className={`rounded-full w-40 h-40 bg-primary-500 block relative overflow-hidden
            before:content-[''] before:bg-primary-600 before:top-[-2rem] before:bottom-0 before:h-64 before:w-10 before:-rotate-45 before:right-7 before:absolute
            after:content-[''] after:bg-primary-700 after:top-[-2rem] after:bottom-0 after:h-64 after:w-10 after:-rotate-45 after:left-9 after:absolute
            `}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection