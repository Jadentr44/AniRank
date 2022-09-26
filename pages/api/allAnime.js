// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Anime from "../../models/anime"
import connectMongo from '../../utils/connect'
export default async function handler(req, res) {
  try{
    await connectMongo();

    let allAnime = await Anime.find({})
    if(!allAnime) return res.status(400).json("error making new user")

    res.status(200).json(allAnime)
  }catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}
