import { useSession } from "next-auth/react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bio from "./Bio";
import AiOutlineCopy from "./icons/copy";

export default function Profile() {
  const [userData, setData] = useState(null);
  const [owner,setOwner] = useState(false)
  const router = useRouter();
  const { data: session } = useSession();
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
    <div>
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
          <div class="grid grid-cols-5 ">
            <div className="mx-[15%]">
              <div className=" border-2 border-red-500">
                <h1 className="text-center bg-red-500 text-white text-2xl">
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
                <h1 className="text-white bg-red-500 text-lg text-center">watching:</h1>
                <p className="text-center">{userData.watching}</p>
              </div>
              <div className="border-2 border-red-500">
                <h1 className="text-white bg-red-500 text-lg text-center">friends:</h1>
                <p className="text-center italic text-gray-400">(coming soon)</p>
              </div>
              <div onClick={() => {navigator.clipboard.writeText(window.location.href)}} className="text-lg text-center text-white bg-red-500 cursor-pointer">
               <p className="flex items-center justify-center">copy profile link <AiOutlineCopy/></p> 
              </div>
            </div>
            <div className="col-span-4 bg-red-400">09</div>
          </div>
        </div>
      )}
    </div>
  );
}
