import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectMongo = async () => {
  const conn = await mongoose
      .connect(process.env.MONGO_URI)
      .catch((err) => console.error(err));
  console.info("Mongodb Connection Established");
  return conn;
};

export default connectMongo;