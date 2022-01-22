import React from 'react'
import AllSkills from './information/AllSkills'
import NavBarInfo from './information/NavBarInfo'
import Presentation from './information/Presentation'

const App = () => {
  return (
    <div className="bg-gray-700 overflow-clip">
      <NavBarInfo />
      <div className='flex relative flex-col gap-12 p-8 font-sans '>
        <Presentation />
        <AllSkills />
      </div >
    </div>
  )
}

export default App
