import connectMongo from "../../../utils/connect";
import User from "../../../models/user";
export default async function updateWatching(req, res) {
  try {
    await connectMongo();

    
    console.log(req.body);
    const userData = await User.findOne({ username: req.body.username });
    console.log("user list", userData.list)
    
    const newData = await User.findOneAndUpdate({ username: req.body.username },{$push:{list:req.body.newData}}, {
      new: true
    })
    res.status(200).json(newData)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
