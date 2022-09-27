import connectMongo from '../../../utils/connect'
import mongoose from 'mongoose';
import User from '../../../models/user';
export default async function getUser(req, res) {
  try {
     
      await connectMongo();

      
      const { id } = req.query;
      
      const userData = await User.find({ _id: id });

      if(!userData) return res.json(404).json('error error finding user')

      res.status(200).json(userData);
      
      console.log("GOT DOCUMENT!");
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
}