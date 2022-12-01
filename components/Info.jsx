import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useSession } from "next-auth/react";
export default function Info() {
  const [animeData, setData] = useState(null);
  const [watching, setWatching] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    if (animeData) {
      if (!session) return;
      if (
        session.watching == animeData.titles[Object.keys(animeData.titles)[0]]
      )
        setWatching(true);
      return;
    }

    getData();
  },[router]);
  async function getData() {
    if (!id) return;

    const url = `https://kitsu.io/api/edge/anime/${id}`;
    const data = await (await axios.get(url)).data.data.attributes;
    console.log(data)
    setData(data);
  }

  async function updateWatching() {
    const data = {
      newWatching: animeData.titles[Object.keys(animeData.titles)[0]],
      username: session.name,
    };
    try {
      await axios.put("/api/user/watching", data);
      setWatching(true);
      session.watching = animeData.titles[Object.keys(animeData.titles)[0]];
    } catch (error) {

      alert("error");
    }
  }
  return (
    <div className="">
      {!animeData ? (
        <div className="h-screen w-screen flex justify-center items-center">
        <Oval
          className=""
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
        </div>
      ) : (
       <div className="w-full mx-[10%] mt-20 flex">
        <div className="w-1/4">
          <img src={animeData.posterImage.original} alt="" />
        </div>
        <div className="w-3/4">

        </div>
       </div>
      )}
    </div>
  );
}
