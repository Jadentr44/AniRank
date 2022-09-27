import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import { useSession } from "next-auth/react"
function MyApp({ Component, pageProps }) {
  const [indieData, setIndie] = useState(null)
  return(
    <SessionProvider>
    <Component setIndie={setIndie} indieData={indieData} />
    </SessionProvider>
    )
}

export default MyApp
