// lib/utils.js
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    throw new Error("Failed to connect to database!");
  }
};
