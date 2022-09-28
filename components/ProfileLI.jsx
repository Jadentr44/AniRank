import React from 'react'

export default function ProfileLI({name,url,index}) {
  console.log(url)
  return (
    <div className='flex px-5 border-[1px] justify-between'>
    <div className='flex  items-center'>
     <img className='h-[15vh] m-2' src={`${url}`} alt="" /> <h1 className='text-3xl'>{name}</h1>
    </div>
    <div className='flex items-center '>

   <h1 className='text-3xl'>#{index}</h1>
    </div>
    </div>
  )
}
