import mongoose from "mongoose";

const connectMongo = async () => {
  const conn = await mongoose
      .connect("mongodb://127.0.0.1:27017/AniRank")
      .catch((err) => console.error(err));
  console.info("Mongodb Connection Established");
  return conn;
};

export default connectMongo;