import React from 'react'
import { useRouter } from 'next/router'

export default function Card({imgURL,cardData}) {
  const router = useRouter();
  return (
    <div onClick={()=> {router.push(`/anime/${cardData.id}`)}} className='min-w-[9vw] w-[9vw]  mx-2 relative    hover:opacity-80  hover:cursor-pointer'>
       <img className='h-full hover:blur-[1px] ' src={imgURL} alt={"cover picture"} />
       <p className='border  w-full bg-red-500 text-white text-center absolute bottom-0'>{cardData.attributes.titles[Object.keys(cardData.attributes.titles)[0]]}</p>
      {console.log('card data ',cardData)}
    </div>
  )
}
