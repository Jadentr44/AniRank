import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import {Oval} from  'react-loader-spinner'

export default function AnimeList({params,title,pageChange,setIndie}) {
  const [animeCards, changeCards] = useState(null);
  useEffect(() => {
    renderCards();
  }, []);
  async function renderCards() {
    const animeData = await (await axios.get(`https://kitsu.io/api/edge/anime${params}`)).data.data;
    console.log(animeData)

    let cardsData = animeData.map((e,i) => {
      // if(e.title_english.includes('Season'))return
      return <Card key={i} setIndie={setIndie} pageChange={pageChange} cardData={e.attributes} imgURL={e.attributes.posterImage.original} />;
    });
    changeCards(cardsData);
  }
  return (
    <div className="mx-[10%]">
      <h2 className="text-3xl mt-6 mb-3">{title}:</h2>
      <div className="flex overflow-auto ">
        {!animeCards
      ?<div className="justify-self-center"><Oval 
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
      />
      </div>
      :animeCards}
      
      </div>
    </div>
  );
}
