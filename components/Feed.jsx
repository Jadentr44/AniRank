import React, { useState } from "react";
import AnimeList from "./AnimeList";
import { useRouter } from 'next/router'
export default function Feed({setOpen,setModal}) {
  const router = useRouter();
 

  return (
    <div className="pt-12">
      

      <div className="  mb-24">
        <AnimeList
        setModal={setModal}
          setOpen={setOpen}
          params={"?sort=popularityRank"}
          title={"Popular Anime"}
        />
        <AnimeList
        setModal={setModal}
        setOpen={setOpen}
          params={
            "?filter[categories]=action&sort=-averageRating&page[limit]=20"
          }
          title={"Action Anime"}
        />
        <AnimeList
        setModal={setModal}
          setOpen={setOpen}
          params={
            "?filter[categories]=comedy&sort=-averageRating&page[limit]=20"
          }
          title={"Comedy Anime"}
        />
      </div>
    </div>
  );
}
