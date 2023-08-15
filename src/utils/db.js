const dotenv = require('dotenv');
dotenv.config();

import mongoose from "mongoose";


let isConnected = false;



const connectToDb = async () => {

  mongoose.set("strictQuery", true);

  

  if (isConnected) {

    console.log("Already connected to the database.");

    return;
  }

  try {

    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {

    console.error("Error connecting to MongoDB:", error);

    isConnected = false;
  }
};

export default connectToDb;