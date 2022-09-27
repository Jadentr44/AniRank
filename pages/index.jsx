import Nav from "../components/Nav"
import Feed from "../components/Feed";
import InfoPage from "../components/InfoPage";
import { useSession } from "next-auth/react"
import React, { useState, useEffect } from "react";

export default function Home() {
  const {data: session} = useSession();
  const [currentPage, setPage] = useState('home')
  const [indieData, setIndie] = useState(null)
  console.log("session:", session)

  const pageChange = (page) => setPage(page);

  function renderPage(){
    if(currentPage == 'home') return <Feed setIndie={setIndie} pageChange={pageChange}/>
    if(currentPage == 'info') return <InfoPage indieData={indieData} />
  }
  return (
    <div className="">
    <Nav pageChange={pageChange} session={session}/> 
    {renderPage()}
    
    </div>
  )
}
