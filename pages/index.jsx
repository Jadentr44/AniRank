import Nav from "../components/Nav";
import Feed from "../components/Feed";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

import { signOut, useSession } from "next-auth/react";
import {
  AiFillYoutube,
  AiFillStar,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
export default function Home({}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [modalInfo, setModal] = useState(null);
  const { data: session } = useSession();
  const [hoverName,setHover] = useState(false)
  return (
    <div className="relative">
      <Nav fixed={true} />
      <div
        // style={{ backgroundSize: "100% auto" }}
        className="md:h-[30rem] h-[20rem]  bg-[url('https://www.fanbolt.com/storage/2021/08/anime-iphone-wallpaper-800x500.jpg')] bg-no-repeat   bg-center bg-cover px-[10%]  pt-16"
      >
        <div className=" ml-auto md:w-1/2 w-2/3 h-full flex flex-col justify-center">
          <h2 className="text-center textShadow text text-xl lg:text-5xl md:w-2/3 text-white font-bold mx-auto  mb-12">
            Browse And Rank Your Favorite Anime Titles
          </h2>
        </div>
      </div>
      <Feed setModal={setModal} setOpen={setOpen} />

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-gray-100 opacity-70"></div>
        <div className="fixed inset-0 flex items-end md:items-center justify-center px-4  ">
          {!modalInfo ? (
            "loading"
          ) : (
            <div>
              <Dialog.Panel
                className={
                  "lg:w-[60rem] md:w-[45rem] w-screen max-h-[85vh]  rounded bg-white border-2 relative"
                }
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-0 md:top-0 -top-12  w-12 h-12 p-2 rounded-full text-back md:bg-white hover:bg-slate-200"
                >
                  <AiOutlineCloseCircle size={"100%"} />
                </button>
                <div className="flex w-full">
                  <div className="w-1/3 md:w-1/5 flex items-center  mx-auto">
                    <img className="my-auto  bg-red-200" src={modalInfo.attributes.posterImage.original} alt="" />
                  </div>
                  <div className="w-2/3 md:w-4/5">
                    <h2
                    onClick={() => {
                      router.push(`/anime/${modalInfo.id}`);
                    }} 
                      // onClick={() => console.log(modalInfo)}
                      className="lg:text-4xl font-semibold flex md:max-w-[90%] w-fit  pl-2  text-xl mb-2 cursor-pointer"
                    >
                      <div className=" cursor-pointer " onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>

                      {modalInfo.attributes.titles[Object.keys(modalInfo.attributes.titles)[0]]}
                      </div>
                      <IoIosArrowForward
                      style={{color:hoverName?"red":"black"}}
                        className="my-auto lg:h-12 lg:w-12 w-8 h-8"
                        size={"100%"}
                      />
                    </h2>
                    <div className="flex flex-wrap pl-3 ">
      <p className="w-full lg:text-2xl md:text-xl sm:text-lg my-1">
        {modalInfo.attributes.episodeCount} episodes 
      </p>
      <p className="w-full lg:text-2xl md:text-xl sm:text-lg my-1">
        rated:{modalInfo.attributes.ageRating}
      </p>
      <p className="w-full lg:text-2xl md:text-xl sm:text-lg my-1">
        {modalInfo.attributes.createdAt ? (
          <span>
            {modalInfo.attributes.startDate.substring(0, 4)}
            
          </span>
        ) : (
          ""
        )}
      </p>
      <p className="flex items-center lg:text-2xl md:text-xl sm:text-lg pt-1">
        <AiFillStar
          className="w-5 sm:w-6 lg:w-7 text-yellow-500 "
          size={"100%"}
        />
        {(modalInfo.attributes.averageRating * 0.1).toFixed(1)}/10{" "}
        {modalInfo.attributes.youtubeVideoId ? (
          <>
            •
            <a
              target={"_blank"}
              rel="noreferrer"
              className="text-red-500 ml-2"
              href={`https://www.youtube.com/watch?v=${modalInfo.attributes.youtubeVideoId}`}
            >
              <AiFillYoutube className="md:w-7 w-6 lg:w-9" size={"100%"} />
            </a>
          </>
        ) : (
          ""
        )}
      </p>
    </div>
                  </div>
                  
                </div>
                <div className=" mt-2 max-h-[30vh]  bg-blue-200 overflow-auto">
  <p className="px-[5%] py-2  md:text-lg lg:text-2xl  ">{modalInfo.attributes.description}</p>
</div>
              </Dialog.Panel>
            </div>
          )}
        </div>
        
      </Dialog>
    </div>
  );
}
{
  /* <Dialog.Panel className="lg:w-[60rem]   rounded bg-white border-2 relative ">
<button
  onClick={() => setOpen(false)}
  className="absolute right-0 top-0  w-12 h-12 p-2 rounded-full text-back bg-white hover:bg-slate-200"
>
  <AiOutlineCloseCircle size={"100%"} />
</button>

<div className="md:flex w-full">
  <div className="">
    <img
      className=" w-2/3 md:w-[15rem] mx-auto md:mx-0"
      src={modalInfo.posterImage.original}
      alt=""
    />
  </div>
  <div className="w-full pl-5 pr-10">
    <h2
      onClick={() => console.log(modalInfo)}
      className="lg:text-4xl font-semibold flex w-[80%]  text-xl mb-2"
    >
      {modalInfo.titles[Object.keys(modalInfo.titles)[0]]}<IoIosArrowForward className="my-auto h-12 w-12" size={"100%"} />
    </h2>
    <div className="flex flex-wrap">
      <p className="w-full text-xl my-1">
        {modalInfo.episodeCount} episodes •{" "}
        {modalInfo.episodeLength} minutes / each
      </p>
      <p className="w-full text-xl my-1">
        {modalInfo.ageRating}
      </p>
      <p className="w-full text-xl my-1">
        {modalInfo.createdAt ? (
          <span>
            {modalInfo.startDate.substring(0, 4)}
            {modalInfo.endDate ? (
              <span>{`-${modalInfo.endDate.substring(
                0,
                4
              )}`}</span>
            ) : (
              ""
            )}
          </span>
        ) : (
          ""
        )}
      </p>
      <p className="flex items-center text-xl pt-1">
        <AiFillStar
          className="w-6 text-yellow-500"
          size={"100%"}
        />
        {(modalInfo.averageRating * 0.1).toFixed(1)}/10{" "}
        {modalInfo.youtubeVideoId ? (
          <>
            •
            <a
              target={"_blank"}
              className="text-red-500 ml-2"
              href={`https://www.youtube.com/watch?v=${modalInfo.youtubeVideoId}`}
            >
              <AiFillYoutube className="w-7" size={"100%"} />
            </a>
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  </div>
</div>
<div className="max-h-44 overflow-auto mt-2">
  <p className="px-[5%] py-2   ">{modalInfo.description}</p>
</div>
</Dialog.Panel> */
}
