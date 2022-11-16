import React, { useState } from "react";
import AnimeList from "./AnimeList";
import { useRouter } from 'next/router'
export default function Feed({}) {
  const router = useRouter();
  const [main, setMain] = useState({
    url: "https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF894,1000_QL80_.jpg",
    name: "Death Note",
    desc: "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L. (Source: MAL Rewrite)",
    age: "pg-13",
    rating: "12",
    rank: "2",
    episodes: 12,
    id:1376
  });

  return (
    <div className="">
      

      <div className="  mb-24">
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
