import mongoose from "mongoose";
import "dotenv/config";
// ENV
const { MONGODB_URL } = process.env;

// --------------------------------------------------------------

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL as string);
    console.log(`MONGODB CONNECTED AT :-> ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
