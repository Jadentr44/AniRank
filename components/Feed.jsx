import React from 'react'
import AnimeList from './AnimeList'

export default function Feed({pageChange,setIndie}) {
  return (
    <div> <AnimeList setIndie={setIndie}  pageChange={pageChange} params={'?sort=popularityRank'} title={'Popular Anime'}/></div>
  )
}
