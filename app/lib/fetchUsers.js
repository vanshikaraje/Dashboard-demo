// lib/fetchUsers.js
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB(); // Connect to DB before querying
    const users = await User.find(); // Fetch all users
    return users; // Return the users
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};
