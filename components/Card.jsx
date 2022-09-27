import React from 'react'
import { useRouter } from 'next/router'

export default function Card({imgURL,cardData,setIndie}) {
  const router = useRouter();
  return (
    <div onClick={()=> {setIndie(cardData);router.push('/InfoPage')}} className='min-w-[9vw] w-[9vw]  mx-2 relative  hover:opacity-75 hover:cursor-pointer'>
      <img className='h-full' src={imgURL} alt={"cover picture"} />
      <p className='border w-full bg-red-500 text-white text-center absolute bottom-0'>{cardData.titles[Object.keys(cardData.titles)[0]]}</p>
    </div>
  )
}
