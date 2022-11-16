import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AiOutlineCheckCircle from "./icons/Check";
import axios from "axios";
export default function Bio({ owner, bio }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { name } = router.query;
  const [bioChange, setChange] = useState(false);
  const [bioValue, setBio] = useState(false);
async function updateBio(){
  setChange(false)
  let res = await axios.post('/api/user/updateBio',{
    username:name,
    bio:bioValue,
  })


}
  return (
    <div className="border-2 relative border-b-0 border-red-500">
      <div></div>
      <div className="flex justify-between items-center bg-red-500">
        <div className="invisible">
          <AiOutlineCheckCircle />
        </div>
        <h1 className="text-white text text-xl my-1 font-bold">Bio</h1>
        {bioChange ? (
          <div onClick={() => updateBio()} className="cursor-pointer">
            <AiOutlineCheckCircle />
          </div>
        ) : (
          <div className="invisible">
            <AiOutlineCheckCircle />
          </div>
        )}
      </div>
      <p className="px-3">
        {owner ? (
          <textarea
            onChange={(e) => {setChange(true);setBio(e.target.value)}}
            placeholder="enter bio"
            className="w-full h-[10vh]"
          >
            {bio}
          </textarea>
        ) : (<div>
          {bio ? bio : <div className="text-center text-lg">no bio yet</div>}</div>
        )}
      </p>
    </div>
  );
}
