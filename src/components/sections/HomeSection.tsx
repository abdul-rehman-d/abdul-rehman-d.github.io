import { useEffect, useRef, useState } from "react";
import star from './../../assets/star.png'

const HomeSection = () => {
  const containerRef = useRef(null)
  return (
    <div className='fill-remaining flex items-center lg:px-32 md:px-16 px-8 md:gap-10 relative' ref={containerRef}>
      {Array(50).fill(0).map(() => (
        <img
          src={star}
          className='absolute w-10 h-10 z-0'
          style={{
            top: Math.floor(Math.random()*window.innerHeight-100/10),
            left: Math.floor(Math.random()*window.innerWidth-100/10),
            rotate: `${Math.floor(Math.random()*90-1)}deg`,
          }}
        />
      ))}
      <div className="flex flex-col gap-2 text-center md:text-left bg-dark z-10">
        <p className="text-white text-3xl">Hello, I am</p>
        <h1 className="text-primary-400 text-5xl">Abdul Rehman Daniyal</h1>
        <h1 className="text-primary-600 text-3xl">A Frontend Developer</h1>
      </div>
      <div className="flex-grow md:flex flex-row justify-center hidden">
        <div className="border-[0.75rem] border-primary-400 flex justify-center items-center w-64 h-64 bg-dark z-10">
          <span
            className={`rounded-full w-40 h-40 bg-primary-500 block relative overflow-hidden
            before:content-[''] before:bg-primary-600 before:top-[-2rem] before:bottom-0 before:h-64 before:w-10 before:-rotate-45 before:right-6 before:absolute
            after:content-[''] after:bg-primary-700 after:top-[-2rem] after:bottom-0 after:h-64 after:w-10 after:-rotate-45 after:left-10 after:absolute
            `}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection