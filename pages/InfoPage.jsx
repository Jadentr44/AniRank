import React from 'react'
import Nav from '../components/Nav'
import Info from '../components/Info'
export default function InfoPage({indieData}) {
  return (
    <div>
      <Nav/>
      <Info indieData={indieData}/>
    </div>
  )
}
