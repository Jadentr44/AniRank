import mongoose, { Schema, model } from "mongoose";

const animeSchema = new Schema({
  name:{type:String},         
  episodes:{type:Number},
  movies:{type:Number},
  genre:{type:Array},
  imgURL:{type:String}
})

const Anime = mongoose.models.Anime || model("Anime",animeSchema)
export default Anime;