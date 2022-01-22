import React from 'react'

const Presentation = () => {
  return (
    <header className="text-slate-400 flex flex-col gap-4 xl:flex-row justify-center align-middle leading-relaxed font-bold  p-4 rounded-xl top-4 font-display bg-gray-900 shadow-md hover:drop-shadow-2xl hover:shadow-white" id='presentation'>
      <div className="lg:w-full flex justify-center flex-col lg:text-center xl:text-left 2xl:pl-14">
        <h1 className='text-7xl justify-self-start '>Jose Guevara</h1>
        <h2 className='text-5xl md:text-6xl leading-tight'>Full Stack Developer</h2>
        <p className='text-4xl leading-relaxed'>Specialized in MERN Stack</p>
        <ul className='list-inside list-disc text-xl lg:list-none xl:list-disc'>
          <li>Self-taught software developer</li>
          <li>Improving day by day</li>
          <li>Interested in building complex systems</li>
          <li>Interested in participating in open-source projects</li>
        </ul>
      </div>
      <img className='rounded-xl ' src='http://placekitten.com/600/400' />
    </header>
  )
}

export default Presentation
