import React from 'react'
import NavBar from './components/navbar'
import AllSkills from './information/AllSkills'
import Presentation from './information/Presentation'

const App = () => {
  return (
    <div className="bg-gray-700 p-8 font-sans overflow-clip relative flex flex-col gap-12">
      <NavBar />
      <Presentation />
      <AllSkills />
    </div>
  )
}

export default App
