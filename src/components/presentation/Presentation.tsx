import React from 'react'

const Presentation = () => {
  return (
    <header className="font-bold flex py-8 font-display">
      <div className="md:w-3/5">
        <h1 className='md:text-7xl md:leading-loose'>Jose Guevara</h1>
        <h2 className='md:text-6xl md:leading-tight'>Full Stack Developer</h2>
        <p className='md:text-4xl'>Specialized in MERN Stack</p>
      </div>
      <img src='http://placekitten.com/600/400' />
    </header>
  )
}

export default Presentation
