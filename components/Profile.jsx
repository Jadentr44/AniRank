import { useSession } from "next-auth/react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bio from "./Bio";
import AiOutlineCopy from "./icons/Copy";

import ProfileList from "./ProfileList";

export default function Profile() {
  const [userData, setData] = useState(null);
  const [owner,setOwner] = useState(false)
  const { data: session } = useSession();
  const router = useRouter();
  const { name } = router.query;


  useEffect(() => {
    console.log('owner',owner);
    if (!userData){
    getData();
    }
    checkOwnership();
  });
  async function getData() {
    if (!name) return;

    const url = `/api/user/name/${name}`;
    const data = await axios.get(url);
    setData(data.data[0]);
    
  }
  function checkOwnership(){
    if(session && name){
      if(session.name == name) return setOwner(true)
      setOwner(false)
    }
  }
  return (
    <div style={{zIndex:0}}>
      {!userData ? (
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
        <div className="mx-[10%] mt-12  ">
          <div class="block lg:grid grid-cols-5 ">
            {/* small profile */}
            <div className=" lg:hidden block">
            <div className=" border-2 border-red-500 rounded-t-lg">
              <h1 className="text-center text-4xl text-white bg-red-500 font-bold py-2">{name}</h1>
              <div className="flex">
              <img
                  className="w-1/2 rounded-tl"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              <div>info</div>
              </div>
            </div>
            </div>
            {/* large profile */}
            <div className="mx-[15%] lg:block hidden ">
              <div className=" border-2 border-red-500 rounded-t-lg">
                <h1 className="text-center bg-red-500 text-white py-1  font-bold text-2xl">
                  {userData.username}
                </h1>
                <img
                  className="w-full"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </div>
              <Bio owner={owner} bio={userData.bio} />
              <div className="border-2 border-red-500">
                <h1 className="text-white bg-red-500 text-xl font-bold py-1 text-center ">Watching</h1>
                <p className="text-center my-2">{userData.watching}</p>
              </div>
              <div className="border-2 border-red-500">
                <h1 className="text-white bg-red-500 text-xl font-bold py-1 text-center">Friends</h1>
                <p className="text-center italic text-gray-400 my-2">(coming soon)</p>
              </div>
              <div onClick={() => {navigator.clipboard.writeText(window.location.href)}} className="text-lg text-center text-white bg-red-500 cursor-pointer rounded-b-lg">
               <p className="flex items-center font-bold py-1 justify-center">copy profile link <AiOutlineCopy/></p> 
              </div>
            </div>
            <div className="col-span-4 ">
              {!userData
            ?"loading"
             :<ProfileList data={userData} owner={owner} />}
          {/*  :<ProfileUL data={userData} />} */}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
