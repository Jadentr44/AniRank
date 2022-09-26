import React from 'react'

export default function Card({imgURL,name}) {
  return (
    <div className='w-[9vw] mx-10 relative  hover:opacity-75 hover:cursor-pointer'>
      <img className='h-full' src={imgURL} alt={name} />
      <p className='border w-full bg-red-500 text-white text-center absolute bottom-0'>{name}</p>
    </div>
  )
}
