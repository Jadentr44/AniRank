import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
export default function profile() {
  const { data: session } = useSession();
  const [profileData, setProfile] = useState(null);

  useEffect(() => {
    if(!profileData)getUser()
  });
  async function getUser(){
    if(!session) return 
    let userData  = await (await axios.get(`api/user/${session.id}`)).data[0]
    setProfile(userData)
  }
  return (
    <div>
      <Nav />
      {!session ? (
        <h1 className="text-5xl text-center">Please login to view profile</h1>
      ) : (
        <div>
          {!profileData ? (
            <div className="w-full flex justify-center mt-[30vh]">
            <Oval
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
            /></div>
          ) : (
            "welcome"
          )}
        </div>
      )}
    </div>
  );
}
