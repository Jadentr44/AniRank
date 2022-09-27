import React from 'react'
import AnimeList from './AnimeList'

export default function Feed({setIndie}) {
  return (
    <div> <AnimeList setIndie={setIndie}   params={'?sort=popularityRank'} title={'Popular Anime'}/>
    <AnimeList setIndie={setIndie}   params={'?filter[categories]=action&sort=-averageRating&page[limit]=20'} title={'Action Anime'}/>
    <AnimeList setIndie={setIndie}   params={'?filter[categories]=comedy&sort=-averageRating&page[limit]=20'} title={'Comedy Anime'}/></div>
  )
}
