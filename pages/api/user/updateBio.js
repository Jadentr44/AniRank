import connectMongo from "../../../utils/connect";
import User from "../../../models/user";
export default async function updateList(req, res) {
  try {
    await connectMongo();

    
    console.log(req.body);
    const userData = await User.findOne({ username: req.body.username });
    
    
    const newData = await User.findOneAndUpdate({ username: req.body.username },{bio:req.body.bio},{
       new:true
    })
    res.status(200).json(newData)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
