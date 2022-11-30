import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import SearchCard from "./SearchCard";
export default function SearchResults() {
  const router = useRouter();
  const { name } = router.query;
  const [searchData, setData] = useState(null);
// runs every
  useEffect(() => {
      getData();
  },[router]);

  async function getData() {
    // stop if there is no name in the router
    if (!name ) return setData([]);
    // get anime data from api
    const url = `https://kitsu.io/api/edge/anime/?page[limit]=12&filter[text]=${name}`;
    const data = await (await axios.get(url)).data.data;
    console.log(router)
    // stop if failed
    if (!data) return;

    // map out the data to the cards
    setData(
      data.map((e, i) => {
        return <SearchCard cardData={e} key={i} />;
      })
    );
  }

  return (
    <div className="pt-14 mx-[10%] ">
      {!searchData ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Oval
            height={"30vh"}
            width={"30vh"}
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
      ) : (<div className="mt-14">
        <h1 className="md:text-3xl text-xl mb-4 ">Showing Results For &ldquo;{router.query.name}&ldquo;</h1>
        <div className=" flex flex-wrap justify-between mb-20">
          {searchData}
        </div>
        </div>
      )}
    </div>
  );
}
