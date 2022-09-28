import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useSession } from "next-auth/react";
export default function Info() {
  const [animeData, setData] = useState(null);
  const [watching,setWatching] = useState(false)
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  console.log("sesstion:", session);
  useEffect(() => {
    
    if (animeData){
      if(!session) return
    if(session.watching ==animeData.titles[Object.keys(animeData.titles)[0]])
    setWatching(true)
      return
    } 

    getData();
  });
  async function getData() {
    if (!id) return;

    const url = `https://kitsu.io/api/edge/anime/${id}`;
    const data = await (await axios.get(url)).data.data.attributes;
    console.log(data);
    setData(data);
  }

  async function updateWatching(){
   const data = {
      newWatching:animeData.titles[Object.keys(animeData.titles)[0]],
      username:session.name
    }
    try{
      let update = await axios.put('/api/user/watching',data)
    setWatching(true)
    session.watching=animeData.titles[Object.keys(animeData.titles)[0]]
    }catch(error){
      console.log(error)
      alert("error")
    }
    
  }
  return (
    <div className="flex items-center h-[90vh]">
      {!animeData ? (
        <Oval
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
      ) : (
        <div className="mx-[10%] grid grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/white-red-grunge-texture-background_1409-1748.jpg?w=2000)",
              backgroundSize: "100% 100%",
            }}
            className="px-5 flex justify-center align-middle"
          >
            <img
              className=" rounded-[20%] "
              src={animeData.posterImage.original}
              alt=""
            />
          </div>
          <div className="col-span-2">
            <div className="w-full h-full grid grid-cols-4 gap-4">
              <div className="h-full">
                <ul class="h-full grid grid-cols-1 gap-4 content-between ...">
                  <li className="flex-col border-2 bg-gray-200  rounded-b-lg  text-2xl ">
                    <div className="m-auto text-center p-1  bg-red-500 text-white">
                      Rating
                    </div>
                    <div className="m-auto p-6 text-center">
                      {(animeData.averageRating * 0.1).toFixed(1)}/10
                    </div>
                  </li>
                  <li className="flex-col border-2 bg-gray-200 rounded-b-lg   text-2xl ">
                    <div className="m-auto text-center p-1   bg-red-500 text-white">
                      Rank
                    </div>
                    <div className="m-auto p-6 text-center">
                      #{animeData.ratingRank}
                    </div>
                  </li>
                  <li className="flex-col border-2 bg-gray-200 rounded-b-lg text-2xl ">
                    <div className="m-auto p-1 text-center  bg-red-500 text-white">
                      Popularity
                    </div>
                    <div className="m-auto p-6 text-center">
                      #{animeData.popularityRank}
                    </div>
                  </li>
                  <li className="flex-col border-2 bg-gray-200 rounded-b-lg   text-2xl ">
                    <div className="m-auto p-1 text-center  bg-red-500 text-white">
                      Age Rating
                    </div>
                    <div className="m-auto p-6 text-center">
                      {animeData.ageRating}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <h1 className="text-5xl bg-red-500 py-3 text-white w-full text-center">
                  {animeData.titles[Object.keys(animeData.titles)[0]]}
                </h1>
                <p className="bg-gray-200 rounded-b-lg p-4 text-md">
                  {animeData.description}
                </p>
                <div className="">
                  {session ? (
                    <div className="flex justify-between w-full">
                      <button onClick={async()=>{
                        let saved = await axios.post('/api/user/addList',{
                          username:session.name,
                          newData:{name:animeData.titles[Object.keys(animeData.titles)[0]],url:animeData.posterImage.original}
                        })
                        console.log(saved)
                        if(!saved) alert("error saving")
                      }} className="px-2 mt-4 rounded-md w-fit py-1 border-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
                        save to list
                      </button>
                      {watching ? (
                        <button className="px-2 mt-4 rounded-md w-fit py-1 border-2 bg-red-500 text-white cursor-pointer">
                          watching
                        </button>
                      ) : (
                        <button onClick={()=> updateWatching()} className="px-2 mt-4 rounded-md w-fit py-1 border-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
                          watching
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="mt-5 text-xl">log in to save</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
