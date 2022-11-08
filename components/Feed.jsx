import React, { useState } from "react";
import AnimeList from "./AnimeList";
import { useRouter } from 'next/router'
export default function Feed({}) {
  const router = useRouter();
  const [main, setMain] = useState({
    url: "https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF894,1000_QL80_.jpg",
    name: "One Punch Man",
    desc: "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L. (Source: MAL Rewrite)",
    age: "pg-13",
    rating: "12",
    rank: "2",
    episodes: 12,
    id:122
  });

  return (
    <div className="pt-[4.4rem]">
      <div style={{ zIndex: 20 }} className="fixed lg:mx-[10%] left-0 right-0 ">
        <div className="relative bg-white flex justify-center h-fit   min-h-[38vh] w-full">
          <img className="lg:block hidden h-[22rem] w-[14rem] my-auto" src={main.url} alt="" />
          <div className=" lg:w-2/3 text-center">
            
              <h1 className="lg:text-4xl text-xl"> {main.name}</h1>
              <div className="flex justify-around  lg:mx-[15%] mx-[5%] flex-nowrap">
                <h4>Rating:{main.rating}</h4>
                <h4>age:{main.age}</h4>
                <h4>rank:{main.rank}</h4>
                <h4>episodes:{main.episodes}</h4>
              </div>
              <div className="lg:block flex mx-[5%]">
              <p className="lg:w-2/3 w-full mx-auto  mt-5 text-sm lg:text-lg text-black">
                {main.desc.length > 500
                  ? main.desc.substring(0, 500) + "..."
                  : main.desc}
              </p>
              <div className="mt-4">
              <img className="lg:hidden block h-[12rem] w-[15rem] my-auto" src={main.url} alt="" />
              <button onClick={()=> {router.push(`/anime/${main.id}`)}} className="border-2 mt-5 border-black bg-red-500 text-white hover:bg-white hover:text-red-500 rounded-full px-2 py-1 text-xl ">
                see full page
              </button>
              </div>
              
              </div>
              
            
          </div>
        </div>
        <div
          style={{ zIndex: 20 }}
          className=" w-full h-24 bg-gradient-to-b from-white bg-opacity-80"
        ></div>
      </div>

      <div className=" pt-[38vh]">
        <AnimeList
          main={main}
          setMain={setMain}
          params={"?sort=popularityRank"}
          title={"Popular Anime"}
        />
        <AnimeList
          main={main}
          setMain={setMain}
          params={
            "?filter[categories]=action&sort=-averageRating&page[limit]=20"
          }
          title={"Action Anime"}
        />
        <AnimeList
          main={main}
          setMain={setMain}
          params={
            "?filter[categories]=comedy&sort=-averageRating&page[limit]=20"
          }
          title={"Comedy Anime"}
        />
      </div>
    </div>
  );
}
