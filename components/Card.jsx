import React,{useEffect} from 'react'

export default function Card({imgURL,cardData,setMain,main}) {
  
  
  const data = cardData.attributes
  const name = data.titles[Object.keys(cardData.attributes.titles)[0]]
  return (
    <div  onClick={()=> {setMain({name:name,url:imgURL,desc:data.description,rating:(data.averageRating * 0.1).toFixed(1),age:data.ageRating,rank:data.ratingRank,episodes:data.episodeCount,id:cardData.id});}} className='min-w-[9vw] w-[9vw]  mx-2 relative    hover:opacity-80  hover:cursor-pointer'>
       <img className='h-full hover:blur-[1px] ' src={imgURL} alt={"cover picture"} />
       <p className='border  w-full bg-red-500 text-white text-center absolute bottom-0'>{name}</p>
      {console.log('card data ',cardData)}
    </div>
  )
}
