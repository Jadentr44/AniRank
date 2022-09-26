// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/user"
import connectMongo from '../../utils/connect'
export default async function handler(req, res) {
  try{
    await connectMongo();

    let info ={
      name:"jaden",
      email:"admin",
      password:"12345"
    }

    let newUser = await User.create(info)
    if(!newUser) return res.status(400).json("error making new user")

    res.status(200).json(newUser)
  }catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}
