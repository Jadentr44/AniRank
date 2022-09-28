import React, { useState, useEffect } from "react";
import ProfileLI from "./ProfileLI";
export default function ProfileUL({data}) {
  const [list,setList] = useState("loading")
  useEffect(() => {
    renderList();
  }, []);

  function renderList(){
    let listData = data.list.map((e,i) =>{
      console.log("e",e.url)
      return <ProfileLI key={i} index={i+1} name={e.name} url={e.url} />
    })
    setList(listData)
  }
  return (
    <div className="mx-[10%] rounded-br-lg border-2">
      <h1 className="text-center text-6xl py-2 text-white bg-red-500">{data.username}'s list</h1>
      {list}
    </div>
  )
}
