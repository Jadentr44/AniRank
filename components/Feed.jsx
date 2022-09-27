import React from 'react'
import AnimeList from './AnimeList'

export default function Feed({pageChange,setIndie}) {
  return (
    <div> <AnimeList setIndie={setIndie}  pageChange={pageChange} params={'?sort=popularityRank'} title={'Popular Anime'}/>
    <AnimeList setIndie={setIndie}  pageChange={pageChange} params={'?filter[categories]=action&sort=ratingRank&page[limit]=20'} title={'Action Anime'}/>
    <AnimeList setIndie={setIndie}  pageChange={pageChange} params={'?filter[categories]=comedy&sort=ratingRank&page[limit]=20'} title={'Comedy Anime'}/></div>
  )
}
