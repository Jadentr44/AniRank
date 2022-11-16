import connectMongo from "../../../utils/connect";
import User from "../../../models/user";
export default async function updateList(req, res) {
  try {
    await connectMongo();

    

    const userData = await User.findOne({ username: req.body.username });
    
    
    const newData = await User.findOneAndUpdate({ username: req.body.username },{list:req.body.newList},{
       new:true
    })
    res.status(200).json(newData)
  } catch (error) {

    res.status(500).json(error);
  }
}
