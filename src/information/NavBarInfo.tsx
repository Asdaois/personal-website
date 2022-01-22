import React from 'react'
import NavBar from '../components/navbar'
import NavBarLink from '../components/navbar-link'

const NavBarInfo = () => {
  return (
    <NavBar logo={<span className='border-l-8 border-purple-500 pl-1 h-8 text-white text-xl font-bold'>Jose Guevara</span>}>
    <NavBarLink href="#presentation" display="Home"/>
    <NavBarLink href="#skills" display="Skills"/>
    <NavBarLink href="#projects" display="Projects"/>
    <NavBarLink href="#presentation" display="About"/>
  </NavBar>
  )
}

export default NavBarInfo
