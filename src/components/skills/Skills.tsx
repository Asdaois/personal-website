import React from 'react'

type Props = {
  skillName: string,
  children: React.ReactNode
}

const Skills = ({ skillName, children }: Props) => {
  return (
    <div className='flex w-full py-8'>
      <div className='w-1/5 flex justify-center -rotate-45 text-4xl'>
      {skillName}
      </div>
      <div className='flex gap-8 '>
        {children}
      </div>
    </div>
  )
}

export default Skills
