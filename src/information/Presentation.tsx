import React from 'react'

const Presentation = () => {
  return (
    <header className="flex top-4 flex-col gap-4 justify-center p-4 font-bold leading-relaxed align-middle bg-gray-900 rounded-xl shadow-md xl:flex-row text-slate-400 font-display hover:drop-shadow-2xl hover:shadow-white" id='presentation'>
      <div className="flex flex-col justify-center lg:w-full lg:text-center xl:text-left 2xl:pl-14">
        <h1 className='justify-self-start text-7xl'>Jose Guevara</h1>
        <h2 className='text-5xl leading-tight md:text-6xl'>Full Stack Developer</h2>
        <p className='text-4xl leading-relaxed'>Specialized in MERN Stack</p>
        <ul className='text-xl list-disc list-inside lg:list-none xl:list-disc'>
          <li>Self-taught software developer</li>
          <li>Improving day by day</li>
          <li>Interested in building complex systems</li>
          <li>Interested in participating in open-source projects</li>
        </ul>
      </div>
      <img className='rounded-xl' src='http://placekitten.com/600/400' />
    </header>
  )
}

export default Presentation
