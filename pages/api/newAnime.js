// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Anime from "../../models/anime"
import connectMongo from '../../utils/connect'
export default async function handler(req, res) {
  try{
    await connectMongo();

    let info ={
      name:"Hajime no Ippo",
      episodes:126,
      movies:1,
      genre:['sports','comedy','action'],
      imgURL:'https://upload.wikimedia.org/wikipedia/en/8/86/HajimenoIppo_vol1_Cover.jpg'
    }

    let newAnime = await Anime.create(info)
    if(!newAnime) return res.status(400).json("error making new user")

    res.status(200).json(newAnime)
  }catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}
