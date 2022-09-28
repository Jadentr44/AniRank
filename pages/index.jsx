import Nav from "../components/Nav"
import Feed from "../components/Feed";

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Image from "next/image";

export default function Home({setIndie}) {
  

 
  return (
    <div className="">
    <Nav  /> 
    
    <Feed setIndie={setIndie} />
    </div>
  )
}
