import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import {useSession } from "next-auth/react";
export default function Info() {
  const [animeData,setData] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if(animeData) return
    getData()
  });
  async function getData(){
    if(!id) return

    const url = `https://kitsu.io/api/edge/anime/${id}`
    const data = await (await axios.get(url)).data.data.attributes;
    console.log(data)
    setData(data)
  }
  const {data: session} = useSession();
  return (
   
    <div className="flex items-center h-[90vh]">
       {!animeData
    ?<Oval
    height={200}
    width={200}
    color="red"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#F44336"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
    :
    <div className="mx-[10%] grid grid-cols-3 gap-4">
      <div>
        <img className="w-full" src={animeData.posterImage.original} alt="" />
      </div>
      <div className="col-span-2">
        <h1 className="text-5xl mb-8 w-full text-center">
          {animeData.titles[Object.keys(animeData.titles)[0]]}
        </h1>
        <div className="w-full grid grid-cols-4 gap-4">
          <div>
            <ul className=" ">
              <li className="flex-col  text-2xl ">
                <div className="m-auto text-center p-1 w-1/2 min-w-fit bg-red-500">Rating</div>
                <div className="m-auto p-6 text-center">{(animeData.averageRating*.1).toFixed(1)}/10</div>
              </li>
              <li className="flex-col  text-2xl ">
                <div className="m-auto text-center p-1 w-1/2 min-w-fit  bg-red-500">Rank</div>
                <div className="m-auto p-6 text-center">#{animeData.ratingRank}</div>
              </li>
              <li className="flex-col  text-2xl "><div className="m-auto p-1 text-center w-1/2 min-w-fit bg-red-500">Popularity</div><div className="m-auto p-6 text-center">#{animeData.popularityRank}</div></li>
              <li className="flex-col  text-2xl "><div className="m-auto p-1 text-center w-1/2 min-w-fit bg-red-500">Age Rating</div><div className="m-auto p-6 text-center">{animeData.ageRating}</div></li>
            </ul>
          </div>
          <div className="col-span-3"><p>{animeData.description}</p><div className="">{session 
          ?<button className="px-2 mt-4 rounded-md w-fit py-1 border-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer">save to list</button>
        :<p className="mt-5 text-xl">log in to save</p>}</div></div>
        </div>
      </div>
    </div>}
    </div>
  );
}
