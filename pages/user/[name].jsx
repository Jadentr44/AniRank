import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Profile from '../../components/Profile'
import Nav from '../../components/Nav'
export default function profile() {
  
  return (
    <div>
      <Nav/>
      <Profile  />
    </div>
  )
}
