import Nav from "../components/Nav"
import Feed from "../components/Feed";
import InfoPage from "../components/Info";
import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

export default function Home({setIndie}) {
  

 
  return (
    <div className="">
    <Nav  /> 
    <Feed setIndie={setIndie} />
    </div>
  )
}
