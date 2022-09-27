import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
function MyApp({ Component, pageProps }) {

  return(
    <SessionProvider>
    <Component word={'words'} />
    </SessionProvider>
    )
}

export default MyApp
