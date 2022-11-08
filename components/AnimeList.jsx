import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {Oval} from  'react-loader-spinner'

export default function AnimeList({params,title,main,setMain}) {
  const [animeCards, changeCards] = useState(null);
  useEffect(() => {
    renderCards();
  }, []);
  async function renderCards() {
    const animeData = await (await axios.get(`https://kitsu.io/api/edge/anime${params}`)).data.data;
    console.log(animeData)

    let cardsData = animeData.map((e,i) => {
      const titleArr = e.attributes.titles[Object.keys(e.attributes.titles)[0]].split(' ')
      const last =  titleArr[titleArr.length-1].toLowerCase()
      if(last ==='arc' ) return
      return <Card   key={i} setMain={setMain} main={main} cardData={e} imgURL={e.attributes.posterImage.original} />;
    });
    changeCards(cardsData);
  }
  const slideLeft=()=>{
    let row = document.getElementById(title)
    row.scrollLeft = row.scrollLeft - 280;
  }
  const slideRight=()=>{
    let row = document.getElementById(title)
    row.scrollLeft = row.scrollLeft + 280;
  }
  return (
    <div className="mx-[10%]">
      <h2 className="text-3xl mt-6 mb-3">{title}:</h2>
      
      <div className="flex  relative">
      <div className="  flex items-center bg-gradient-to-r from-white w-12 z-10 " >
          <button onClick={slideLeft} >
          <MdChevronLeft size={40} />
          </button>
         </div>
       <div id={title} className="flex lg:overflow-x-hidden scroll  scroll-smooth relative">
        
       {!animeCards
      ?<div className="justify-self-center"><Oval 
      height={80}
      width={80}
      color="red"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#F44336"
      strokeWidth={2}
      strokeWidthSecondary={2}
      />
      </div>
      :animeCards}
      
       </div>
       <div className="absolute left-10 top-0 bottom-0 w-12 bg-gradient-to-r from-white z-10"></div>
      <div className="absolute right-10 top-0 bottom-0 w-12 bg-gradient-to-l from-white"></div>
        <div className="flex z-10 items-center bg-gradient-to-l from-white w-12" onClick={slideRight}>
          <button >
          <MdChevronRight size={40} />
          </button>
         </div>
      
      </div>
    </div>
  );
}
