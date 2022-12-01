import { useRef, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
export default function Signin({}) {
  const router = useRouter();
  //getting login cookies
  const { data: session } = useSession();

  //input elements for login
  const usernameL = useRef(null);
  const passwordL = useRef(null);

  // input elements for sign up

  //which form to show
  const [left, setLeft] = useState(true);

  // when the cookies change, take you to home page if you
  // are logged in(will automatically take you to home page if you are logged in)
  useEffect(() => {
    if (session) router.push(`/`);
  }, [session]);

  // function to log in
  const handleLogin = async () => {
    signIn("credentials", {
      username: usernameL.current.value,
      password: passwordL.current.value,
      redirect: false,
    }).then((res) => {
      if (!res.ok) return alert("error signing in");
    });
  };

  const handleSignup = ()=>{
    alert("signing up is currently disabled")
  }

  // jsx
  return (
    // main div, setting background
    <div
      style={{ backgroundSize: "100% 100%" }}
      className="bg-no-repeat  bg-[url(https://w0.peakpx.com/wallpaper/557/21/HD-wallpaper-anime-landscape-sakura-blossom-night-petals-scenery-polychromatic-anime.jpg)] h-screen bg-no-repeat   bg-center "
    >
      {/* div giving blur effect */}
      <div className="w-full h-full backdrop-blur-sm flex justify-center items-center">
        {/* main form div */}
        <div className="bg-white w-[18rem] h-fit  rounded-lg">
          {/* div for tabs */}
          <div className="flex relative">
            <h2
              onClick={() => setLeft(true)}
              className="w-1/2 text-center text-2xl font-semibold z-20 cursor-pointer"
            >
              Login
            </h2>
            <h2
              onClick={() => setLeft(false)}
              className="w-1/2 text-center text-2xl font-semibold z-20 cursor-pointer"
            >
              Signup
            </h2>
            <motion.div
              transition={{ type: "tween" }}
              animate={{ left: left ? "0%" : "50%" }}
              className="absolute left-0  w-1/2 z-10"
            >
              <motion.div
                animate={{
                  borderTopLeftRadius: left ? ".5rem" : "0",
                  borderTopRightRadius: !left ? ".5rem" : "0",
                }}
                transition={{ delay: 0.1 }}
                className="w-full h-9 bg-gray-200 "
              ></motion.div>
              <div className="w-full h-1 bg-red-600"></div>
            </motion.div>
          </div>
          {/* div showing input and buttons */}
          <div className=" w-full h-[18rem]  overflow-hidden mt-6 flex">
            {/* login div that animates based on state */}
            <motion.div
              transition={{ type: "tween" }}
              animate={{ marginLeft: left ? "0%" : "-100%" }}
              className="min-w-full px-[5%] ml-0 my-auto  "
            >
              <input
                ref={usernameL}
                className="outline-0 border-[1px] w-full rounded-lg text-xl px-3 py-1 mb-4"
                placeholder="Username"
                type="text"
              />
              <input
                ref={passwordL}
                className="outline-0 border-[1px] w-full rounded-lg text-xl px-3 py-1 mb-6"
                placeholder="Password"
                type="text"
              />
              <button onClick={handleLogin} className="loginButton">
                Login
              </button>
            </motion.div>
            {/* sign up div */}
            <div className="min-w-full px-[5%] h-fit my-auto">
              <input
                className="outline-0 border-[1px] w-full rounded-lg text-xl px-3 py-1 mb-4"
                placeholder="Email"
                type="text"
              />
              <input
                className="outline-0 border-[1px] w-full rounded-lg text-xl px-3 py-1 mb-4"
                placeholder="Username"
                type="text"
              />
              <input
                className="outline-0 border-[1px] w-full rounded-lg text-xl px-3 py-1 mb-6"
                placeholder="Password"
                type="text"
              />
              <button onClick={handleSignup} className="loginButton">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
