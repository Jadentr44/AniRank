import React from "react";
import { useRouter } from "next/router";

export default function SearchCard({ cardData }) {
  const router = useRouter();
  return (
    <div onClick={() => {
      router.push(`/anime/${cardData.id}`);
    }} className="border-y py-1 w-full lg:w-[45%] flex cursor-pointer hover:bg-gray-100">
      <div className="lg:min-w-[6.5rem] lg:w-[6.5rem]  lg:h-[8.5rem] 
      md:min-w-[5.5rem] md:w-[5.5rem]  md:h-[7.5rem] 
       w-[4.5rem]  h-[5.5rem] flex overflow-hidden">
        <img className="w-full h-auto my-auto" src={cardData.attributes.posterImage.original} alt="" />
      </div>
      <div className=" w-full">
        <h2  className="lg:w-2/3 text-xl lg:text-2xl   pl-4">

      {cardData.attributes.titles[Object.keys(cardData.attributes.titles)[0]]}
        </h2>
      </div>
    </div>
    // <div
    //   onClick={() => {
    //     router.push(`/anime/${cardData.id}`);
    //   }}
    //   className="min-w-[15vw] border-2 w-[15vw] my-2  mx-4 min-h-full  relative  hover:opacity-75 hover:cursor-pointer"
    // >
    //   <img
    //     className="h-full w-full"
    //     src={cardData.attributes.posterImage.original}
    //     alt={"cover picture"}
    //   />
    //   <p className="border w-full bg-red-500 text-white text-center absolute bottom-0">
    //     {cardData.attributes.titles[Object.keys(cardData.attributes.titles)[0]]}
    //   </p>
    // </div>
  );
}
