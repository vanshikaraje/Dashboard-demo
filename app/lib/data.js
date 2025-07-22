// fetchUsers.js
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB(); // don't forget await!
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};
