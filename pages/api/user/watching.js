import connectMongo from "../../../utils/connect";
import mongoose from "mongoose";
import User from "../../../models/user";
export default async function updateWatching(req, res) {
  try {
    await connectMongo();

    

    const userData = await User.findOneAndUpdate({ username: req.body.username },{watching:req.body.newWatching});

    if(!userData) return res.status(400).json("error updating")
    res.status(200).json("userData");

    
  } catch (error) {

    res.status(500).json(error);
  }
}
