import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function AnimeList() {
  const [animeCards, changeCards] = useState("");
  useEffect(() => {
    renderCards();
  }, []);
  async function renderCards() {
    const animeData = await (await axios.get("/api/allAnime")).data;
    let cardsData = animeData.map((e) => {
      return <Card name={e.name} imgURL={e.imgURL} />;
    });
    changeCards(cardsData);
  }
  return (
    <div className="">
      <h2 className="text-3xl">Animes:</h2>
      <div className="flex ">{animeCards}</div>
    </div>
  );
}
