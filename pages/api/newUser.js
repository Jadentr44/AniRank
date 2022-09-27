// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/user"
import connectMongo from '../../utils/connect'
export default async function handler(req, res) {
  try{
    await connectMongo();

  
    
    let usernameData = await User.find({username:req.body.username})
    console.log("username",usernameData)
    console.log("req",req.body.username)
    if(usernameData[0]) return res.status(409).json("username already exist")

    let emailData = await User.find({email:req.body.email})
    if(emailData[0]) return res.status(409).json("email already exist")

    let newUser = await User.create(req.body)
    if(!newUser) return res.status(404).json("error making new user")

    res.status(200).json(newUser)
  }catch(error){
    // console.log(error)c
    res.status(500).json(error)
  }
}
