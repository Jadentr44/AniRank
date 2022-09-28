import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import SearchCard from "./SearchCard";
export default function SearchResults() {
  const router = useRouter();
  const { name } = router.query;
  const[urlState,setURL] = useState(null)
  const [searchData, setData] = useState(null);

  useEffect(() => {
    if (searchData) return;
    getData();
  });
  async function getData() {
    if (!name) return;

    const url = `https://kitsu.io/api/edge/anime/?page[limit]=12&filter[text]=${name}`;
    const data = await (await axios.get(url)).data.data;
    if (!data) return;
    setData(
      data.map((e, i) => {
        return <SearchCard  cardData={e} key={i} />;
      })
    );
    
  }

  return (
    <div>
      {!searchData ? (
        <Oval
          height={80}
          width={80}
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
        <div className="mx-[10%] flex flex-wrap justify-around my-8">
          {searchData}
          </div>
      )}
    </div>
  );
}
