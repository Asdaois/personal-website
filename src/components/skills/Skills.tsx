import React from 'react'

type Props = {
  displayName: string,
  children: React.ReactNode
}

const Skills = ({ displayName, children }: Props) => {
  return (
    <div className='md:flex w-full py-8 items-center gap-4 h-full bg-gray-900 text-slate-300 rounded-xl shadow-md hover:drop-shadow-2xl hover:shadow-white'>
      <div className='min-w-[200px] flex flex-col items-center text-6xl md:text-4xl h-full'>
        <span className='grow-full flex-grow'>{displayName}</span>
      </div>
      <div className='flex gap-8 flex-wrap p-4 justify-center md:justify-start'>
        {children}
      </div>
    </div>
  )
}

export default Skills
