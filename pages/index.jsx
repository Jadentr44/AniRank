import Nav from "../components/Nav"
import AnimeList from "../components/AnimeList";
import { useSession } from "next-auth/react"

export default function Home() {
  const {data: session} = useSession();
  console.log("session:", session)
  return (
    <div className="">
    <Nav session={session}/> 
    <AnimeList/>
    
    </div>
  )
}
