import Nav from "../components/Nav";
import Feed from "../components/Feed";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { AiFillYoutube, AiFillStar,AiOutlineCloseCircle } from "react-icons/ai";

export default function Home({}) {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModal] = useState(null);
  useEffect(() => {
    console.log(modalInfo);
  }, [modalInfo]);

  return (
    <div className="relative">
      <Nav fixed={true} />
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
              
              <Dialog.Panel className="lg:w-auto lg:max-w-[50vw]    rounded bg-white border-2 relative ">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-0 top-0  w-12 h-12 p-2 rounded-full text-back bg-white hover:bg-slate-200"
                >
                  <AiOutlineCloseCircle size={"100%"}/>
                </button>

                <div className="lg:flex w-full">
                  <div className="">
                  <img
                    className=" w-2/3 lg:w-[15rem] mx-auto lg:mx-0"
                    src={modalInfo.posterImage.original}
                    alt=""
                  />
                  
                  </div>
                  <div className="w-full pl-5 pr-10">
                    <h2
                      onClick={() => console.log(modalInfo)}
                      className="lg:text-4xl font-semibold text-xl mb-2"
                    >
                      {modalInfo.titles[Object.keys(modalInfo.titles)[0]]}
                    </h2>
                   <div className="flex flex-wrap">

                    <p className="lg:w-full w-1/2 text-xl my-1">{modalInfo.episodeCount} episodes • {modalInfo.episodeLength} minutes / each</p>
                    <p className="lg:w-full w-1/2 text-xl my-1">{modalInfo.ageRating}</p>
                    <p className="lg:w-full w-1/2 text-xl my-1">{modalInfo.createdAt?<span>{modalInfo.startDate.substring(0,4)}{modalInfo.endDate?<span>{`-${modalInfo.endDate.substring(0,4)}`}</span>:""}</span>:""}</p>
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
              </Dialog.Panel>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}
