import React from 'react'
import { useRouter } from 'next/router'

export default function SearchCard({cardData}) {
  const router = useRouter();
  return (
      <div onClick={()=> {router.push(`/anime/${cardData.id}`)}} className='min-w-[15vw] border-2 w-[15vw] my-2  mx-4 min-h-full  relative  hover:opacity-75 hover:cursor-pointer'>
       <img className='h-full w-full' src={cardData.attributes.posterImage.original} alt={"cover picture"} />
       <p className='border w-full bg-red-500 text-white text-center absolute bottom-0'>{cardData.attributes.titles[Object.keys(cardData.attributes.titles)[0]]}</p>
      {console.log('card data ',cardData)}
    </div>
  )
}
