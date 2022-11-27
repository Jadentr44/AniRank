import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import Dropdown from "./Dropdown";
import Image from "next/image";

export default function Nav({ fixed }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [page, setPage] = useState(null);
  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname == "/") setPage("home");
    if (router.pathname.includes("user")) setPage("profile");
  }, [router]);
  return (
    <nav className=" ">
      <div className="z-50 absolute flex justify-between  md:fixed top-0 left-0 right-0 bg-red-600 px-0 md:px-[5%] lg:px-[10%]">
        <div className="h-16 w-auto md:w-[30%]">
          <img
            onClick={() => router.push("/")}
            className="h-full  mx-auto md:mx-0"
            src="/assets/logo.svg"
            alt=""
          />
        </div>
        <div className="w-full hidden md:block h-10 my-auto ">
          <div  className="w-2/3 h-full overflow-hidden bg-white mx-auto rounded-full flex">
          <AiOutlineSearch size={"100%"} className="my-auto h-full w-5  mx-2 " />
          <input className="  w-full outline-0 pr-5" type="text " />
          </div>
        </div>
        <div className="w-[30%] hidden md:flex justify-end items-center">
          {!session ? (
            <button
              onClick={() => router.push("/login")}
              className="text-white text-lg border-2 px-2 py-1 border-white hover:bg-white hover:text-red-500"
            >
              login/sign up
            </button>
          ) : (
            <div>
              <span className=" mx-2 text-white text-lg">{session.name}</span>
              <Dropdown session={session} />
            </div>
          )}
        </div>
        {session ? (
          <div
            onClick={signOut}
            className=" md:hidden my-auto mr-4  text-white min-w-fit"
          >
            <ImExit className="h-6 w-auto mx-auto" size={"100%"} />
             <p>

            Log out
             </p>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* bottom nav */}
      <div className="fixed md:hidden  bottom-0 left-0 right-0  border-2  h-[4rem] min-h-fit bg-white  z-50 flex items-center p-5 justify-around">
        <div
          style={{ color: page == "home" ? "red" : "gray" }}
          className="text-center"
          onClick={() => router.push("/")}
        >
          {" "}
          <AiOutlineHome className="h-10 w-fit mx-auto" size={"100%"} />{" "}
          <p className="">Home</p>
        </div>
        <div
          style={{ color: page == "search" ? "red" : "gray" }}
          className="text-center"
        >
          {" "}
          <AiOutlineSearch className="h-10 w-fit mx-auto" size={"100%"} />{" "}
          <p>Search</p>
        </div>
        <div
          style={{ color: page == "profile" ? "red" : "gray" }}
          onClick={() => {
            if (session) return router.push(`/user/${session.name}`);
            router.push("/login");
          }}
        >
          {" "}
          <BsPerson className="h-10 w-fit mx-auto" size={"100%"} />{" "}
          <p>Profile</p>
        </div>
      </div>
    </nav>
  );
}
// onClick={() => router.push("/api/auth/signin")}
{
  /* <nav style={{zIndex:30}} className={`w-full ${fixed?"fixed":'absolute'} left-0 right-0 top-0 bg-red-600 shadow`}>
      <div className="justify-between   mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between p-0 md:py-0 md:block">
            <a className="" onClick={()=> router.push('/')} >
              {/* <h2 onClick={()=> router.push('/')} className="text-2xl  font-bold text-white">MyAniRank</h2> */
}
//       <img className="h-12" src="/assets/logo.svg" alt="" />
//     </a>
//     <div className="md:hidden">
//       <button
//         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//         onClick={() => setNavbar(!navbar)}
//       >
//         {navbar ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-white"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         )}
//       </button>
//     </div>
//   </div>
// </div>

{
  /* small nav */
}
//     <div>
//       <div style={{zIndex:2}}
//         className={` md:absolute lg:static left-0 right-0 flex-1 justify-self-center lg:w-[22vw] md:w-full mt-8 md:block md:pb-0 md:mt-0 bg-red-500 ${
//           navbar ? "block" : "hidden"
//         }`}
//       >
//         <input onChange={(e)=>setInput(e.target.value)} onKeyDown={(event)=>{
//           if(event.key ==='Enter'){
//             setInput(searchInput.replace(/ /g,'20%'))
//             router.push(`/search/${searchInput}`)
//           }
//         }} className="rounded-lg w-[100%] px-2 py-1" placeholder="search" type="text" />

//         <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//           <a
//             href="javascript:void(0)"
//             className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
//           >
//             Sign in
//           </a>
//           <a
//             href="javascript:void(0)"
//             className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//           >
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="hidden  space-x-2 md:flex justify-end">
// {!session
// ?<button onClick={() => router.push("/login")} className="text-white text-lg border-2 px-2 py-1 border-white hover:bg-white hover:text-red-500">login/sign up</button>
// :<div><span className=" mx-2 text-white text-lg">{session.name}</span><Dropdown session={session}/></div>}

//     </div>
//   </div>

// </nav>
