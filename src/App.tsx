import React from 'react'
import { backendImages, frontendImages, otherImages } from './assets'
import NavBar from './components/navbar'
import Presentation from './components/presentation'
import Skill from './components/skill'
import Skills from './components/skills'

const App = () => {
  return (
    <div className="bg-gray-700 min-h-screen overflow-hidden p-8 font-sans">
      <NavBar />
      <Presentation />
      <div className=''>
      <Skills skillName='Frontend'>
        <Skill skillName='html' imageUrl={frontendImages.html} />
        <Skill skillName='css' imageUrl={frontendImages.css} />
        <Skill skillName='js' imageUrl={frontendImages.js} />
        <Skill skillName='tailwind' imageUrl={frontendImages.tailwind} />
        <Skill skillName='react' imageUrl={frontendImages.react} />
        <Skill skillName='redux' imageUrl={frontendImages.redux} />
        <Skill skillName='nextjs' imageUrl={frontendImages.nextjs} />
      </Skills>
      <Skills skillName='Backend'>
        <Skill skillName='express' imageUrl={backendImages.express} />
        <Skill skillName='mongodb' imageUrl={backendImages.mongodb} />
        <Skill skillName='mongoose' imageUrl={backendImages.mongoose} />
        <Skill skillName='nodejs' imageUrl={backendImages.nodejs} />
        <Skill skillName='firebase' imageUrl={backendImages.firebase} />
        <Skill skillName='passportjs' imageUrl={backendImages.passportjs} />
      </Skills>
      <Skills skillName='Others'>
        <Skill skillName='git' imageUrl={otherImages.git} />
        <Skill skillName='github' imageUrl={otherImages.github} />
        <Skill skillName='heroku' imageUrl={otherImages.heroku} />
        <Skill skillName='jest' imageUrl={otherImages.jest} />
        <Skill skillName='npm' imageUrl={otherImages.npm} />
        <Skill skillName='webpack' imageUrl={otherImages.webpack} />
      </Skills>
      </div>
    </div>
  )
}

export default App
