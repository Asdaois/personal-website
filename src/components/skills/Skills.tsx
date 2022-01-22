import React from 'react'

type Props = {
  displayName: string,
  children: React.ReactNode
}

const Skills = ({ displayName, children }: Props) => {
  return (
    <div className='gap-4 items-center py-8 w-full h-full bg-gray-900 rounded-xl shadow-md md:flex text-slate-300 hover:drop-shadow-2xl hover:shadow-white'>
      <div className='min-w-[200px] flex flex-col items-center text-6xl md:text-4xl h-full'>
        <span className='flex-grow grow-full'>{displayName}</span>
      </div>
      <div className='flex flex-wrap gap-8 justify-center p-4 md:justify-start'>
        {children}
      </div>
    </div>
  )
}

export default Skills
