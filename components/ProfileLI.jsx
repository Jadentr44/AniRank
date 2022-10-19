import React from 'react'
import Grip from './icons/Grip'
export default function ProfileLI({name,url,index}) {
  console.log(url)
  return (
    <div className='flex border-x-2 border-y-[1px] border-gray-400 justify-between'>
    <div className='flex  items-center '>
      <div className='px-8 '>
      <Grip />

      </div>
     <img className='h-[15vh] w-[6vw] border-l-2 border-gray-400  mr-8' src={`${url}`} alt="" /> <h1 className='text-3xl font-bold'>{name}</h1>
    </div>
    <div className='flex items-center border-gray-400  border-l-2'>

   <h1 className='text-3xl font-bold mx-9 '>{index}</h1>
    </div>
    </div>
  )
}
