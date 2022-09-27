import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Dropdown from './Dropdown'


export default function Nav({  }) {
  const [navbar, setNavbar] = useState(false);
  
  const {data: session} = useSession();
  const router = useRouter();

  
  return (
    <nav className="w-full bg-red-500 shadow">
      <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 onClick={()=> router.push('/')} className="text-2xl  font-bold text-white">MyAniRank</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <input className="rounded-lg px-2 py-1" placeholder="search" type="text" />

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="hidden  space-x-2 md:flex justify-end">
        {!session
        ?<button onClick={() => router.push("/login")} className="text-white text-lg border-2 px-2 py-1 border-white hover:bg-white hover:text-red-500">login/sign up</button>
        :<div><span className=" mx-2 text-white text-lg">{session.name}</span><Dropdown session={session}/></div>}
         
        </div>
      </div>
    </nav>
  );
}
// onClick={() => router.push("/api/auth/signin")}
