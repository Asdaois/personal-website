import React from 'react'

const About = () => {
  return (
    <article id='about' className='p-4 md:flex md:flex-col md:w-1/2 text-gray-100 lg:flex drop-shadow-lg shadow-white bg-gray-800 rounded-lg text-lg'>
      <h1 className='p-4 text-4xl text-center'>About me</h1>
      <ul className='list-disc list-inside'>
      <li>
        Clean code oriented, problem solver, self-taught person
      </li>
      <li>
        In my spare time, I like to read books of all type of genres, I am currently writing my own fantasy novel.
      </li>
      <li className='font-bold'>
        Interested in building great things with wonderful people
      </li>
      </ul>
    </article>
  )
}

export default About
