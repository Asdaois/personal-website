import React from 'react'
import NavBar from './components/navbar'

const App = () => {
  return (
    <div className="bg-gray-700 min-h-screen md:p-8 font-sans">
      <NavBar />
      <header className="font-bold flex py-8 font-display">
        <div>
          <h1 className='text-8xl leading-loose'>Jose Guevara</h1>
          <h2 className='text-7xl leading-tight'>Full Stack Developer</h2>
          <p className='text-5xl left-2'>Specialized in MERN Stack</p>
        </div>
        <img src='http://placekitten.com/600/400' />
      </header>
    </div>
  )
}

export default App
