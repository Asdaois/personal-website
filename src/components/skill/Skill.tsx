import React from 'react'

type Props = {
  skillName: string,
  imageUrl: string
}

const Skill = ({ skillName, imageUrl }: Props) => {
  return (
    <div className='relative flex justify-center h-24 w-24 group'>
      <div className='z-10  self-center text-transparent transition-all ease-in group-hover:text-slate-800 group-hover:scale-125 '>
        <strong className='uppercase'>{skillName}</strong>
      </div>
      <img className='object-contain object-center w-24 h-24 rounded transition-all ease-in absolute group-hover:blur-sm' src={imageUrl} />
    </div>
  )
}

export default Skill
