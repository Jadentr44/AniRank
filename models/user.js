import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  username:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String, required:true},
  bio:{type:String,default:"no bio yet"},
  watching:{type:String,default:"N/A"},
  list:{type:Array,default:[]}
})

const User = mongoose.models.User || model("User",userSchema)
export default User;