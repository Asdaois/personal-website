import React from 'react'
import About from './information/About'
import AllSkills from './information/AllSkills'
import ContactMe from './information/ContactMe'
import NavBarInfo from './information/NavBarInfo'
import Presentation from './information/Presentation'

const App = () => {
  return (
    <div className='pt-4 bg-gray-700 overflow-clip'>
      <NavBarInfo />
      <div className='flex relative flex-col gap-12 p-8 font-sans'>
        <Presentation />
        <AllSkills />
      </div>
      <footer className='bg-gray-900 flex flex-col md:flex-row gap-2 p-4'>
        <About />
        <ContactMe />
      </footer>
    </div>
  )
}

export default App
