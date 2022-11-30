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
        className="md:h-[30rem] h-[20rem] bg-[url('https://www.fanbolt.com/storage/2021/08/anime-iphone-wallpaper-800x500.jpg')] bg-no-repeat   bg-center bg-cover px-[10%]  pt-16"
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
        <div className="fixed inset-0 flex items-center justify-center p-4  ">
          {!modalInfo ? (
            "loading"
          ) : (
            <div>
              <Dialog.Panel
                className={
                  "lg:w-[60rem] md:w-[45rem] w-[90vw]  rounded bg-white border-2 relative"
                }
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-0 top-0  w-12 h-12 p-2 rounded-full text-back bg-white hover:bg-slate-200"
                >
                  <AiOutlineCloseCircle size={"100%"} />
                </button>
                <div className="md:flex w-full">
                  <div className="md:w-1/5">
                    <img src={modalInfo.attributes.posterImage.original} alt="" />
                  </div>
                  <div className="w-full">
                    <h2
                    onClick={() => {
                      router.push(`/anime/${modalInfo.id}`);
                    }} 
                      // onClick={() => console.log(modalInfo)}
                      className="lg:text-4xl font-semibold flex max-w-[90%] w-fit  pl-2  text-xl mb-2 cursor-pointer"
                    >
                      <div className="w-fit cursor-pointer" onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>

                      {modalInfo.attributes.titles[Object.keys(modalInfo.attributes.titles)[0]]}
                      </div>
                      <IoIosArrowForward
                      style={{color:hoverName?"red":"black"}}
                        className="my-auto h-12 w-12"
                        size={"100%"}
                      />
                    </h2>
                    <div className="flex flex-wrap pl-5">
      <p className="md:w-full w-1/2 text-xl my-1">
        {modalInfo.attributes.episodeCount} episodes •{" "}
        {modalInfo.attributes.episodeLength} minutes
      </p>
      <p className="md:w-full w-1/2 text-xl my-1">
        {modalInfo.attributes.ageRating}
      </p>
      <p className="md:w-full w-1/2 text-xl my-1">
        {modalInfo.attributes.createdAt ? (
          <span>
            {modalInfo.attributes.startDate.substring(0, 4)}
            {modalInfo.attributes.endDate ? (
              <span>{`-${modalInfo.attributes.endDate.substring(
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
  <p className="px-[5%] py-2   ">{modalInfo.attributes.description}</p>
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
      <p className="md:w-full w-1/2 text-xl my-1">
        {modalInfo.episodeCount} episodes •{" "}
        {modalInfo.episodeLength} minutes / each
      </p>
      <p className="md:w-full w-1/2 text-xl my-1">
        {modalInfo.ageRating}
      </p>
      <p className="md:w-full w-1/2 text-xl my-1">
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
