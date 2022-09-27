

import { Oval } from 'react-loader-spinner'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Profile() {
  const [userData,setData] = useState(null)
  const router = useRouter()
  const { name } = router.query

  useEffect(() => {
    if(userData) return
    getData()
  });
  async function getData(){
    if(!name) return

    const url = `/api/user/name/${name}`
    const data = await axios.get(url);
    console.log(data)
    setData(data)
  }
  return (
    <div>{!userData
    ?<Oval 
    height={80}
    width={80}
    color="red"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#F44336"
    strokeWidth={2}
    strokeWidthSecondary={2}
    />
  :"user found"}</div>
  )
}
