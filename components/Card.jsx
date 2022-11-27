import React, { useRef, useEffect, useState } from "react";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
export default function Card({ imgURL, cardData, setOpen,setModal}) {
  const nameH4 = useRef(null);
  const [lines3, setLines] = useState(false);
  useEffect(() => {
    if (!nameH4) return;
    const lineHeight = parseInt(nameH4.current.style.lineHeight.slice(0, -2));
    const height = nameH4.current.clientHeight;
    if (height / lineHeight > 3) setLines(true);
    // console.log(nameH4.current.clientHeight)
    // console.log(parseInt(nameH4.current.style.lineHeight.slice(0, -2)))
  }, [nameH4]);

  const data = cardData.attributes;
  const name = data.titles[Object.keys(cardData.attributes.titles)[0]];
  // console.log("data: ", data);
  return (
    <div className="border-2 relative lg:min-w-[10rem] min-w-[8rem]  h-[15rem] lg:mx-4 mx-2 flex items-end overflow-hidden z-0">
      <img className="absolute top-0 left-0 right-0 " src={imgURL} alt="" />
      <div className="w-full h-[4.6rem] absolute bg-gray-100  ">
        <div className="flex w-full justify-between px-1">
          <div className="flex  ">
            <AiFillStar className="w-6 h-6 text-yellow-300" />
            <p>{(data.averageRating * 0.1).toFixed(1)}</p>
          </div>
          <AiOutlineInfoCircle onClick={()=>{setOpen(true);setModal(data)}} className="w-5 h-5 my-auto cursor-pointer hover:text-gray-500" />
        </div>
        <h4 ref={nameH4} style={{ lineHeight: "24px" }}>
          {lines3 ? `${name.substring(0, 29)}...` : name}
        </h4>
      </div>
    </div>
  );
}
{
  /* <div  onClick={()=> {setMain({name:name,url:imgURL,desc:data.description,rating:(data.averageRating * 0.1).toFixed(1),age:data.ageRating,rank:data.ratingRank,episodes:data.episodeCount,id:cardData.id});}} className='lg:min-w-[9vw] lg:w-[9vw] min-w-[20vw] mx-2 relative    hover:opacity-80  hover:cursor-pointer'>
       <img className='h-full hover:blur-[1px] ' src={imgURL} alt={"cover picture"} />
       <p className='border  w-full bg-red-500 text-white text-center absolute bottom-0 lg:text-md text-xs'>{name}</p>
      {console.log('card data ',cardData)}
    </div> */
}
