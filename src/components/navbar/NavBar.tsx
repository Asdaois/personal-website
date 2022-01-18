import React from 'react'

const NavBar = () => {
  return (
    <nav className='relative rounded md:min-w-full md:bg-gray-500 md:p-2 md:flex md:justify-between md:px-8'>
    <div className='md:flex md:gap-8 md:w-52'>
      <button>Home</button >
      <button>Projects</button >
      <button>About</button >
    </div>
      <div className='md:flex'>
      <div className=''>Jose Guevara</div>
      <button className='md:w-52'>Contact-Me</button >
    </div>
  </nav>)
}
export default NavBar
