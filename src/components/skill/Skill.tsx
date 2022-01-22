import React from 'react'

type Props = {
  displayName: string,
  imageUrl: string
}

const Skill = ({ displayName, imageUrl }: Props) => {
  return (
    <div className='relative flex justify-center h-24 w-24 group'>
      <div className='z-10  self-center text-transparent transition-all ease-in group-hover:text-white group-hover:scale-125 '>
        <strong className='uppercase'>{displayName}</strong>
      </div>
      <img className='object-contain object-center h-24 rounded transition-all ease-in absolute group-hover:blur-sm group-hover:opacity-50' src={imageUrl} />
    </div>
  )
}

export default Skill
