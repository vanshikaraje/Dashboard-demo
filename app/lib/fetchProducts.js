// lib/fetchProducts.js
import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchProducts = async () => {
  try {
    await connectToDB(); // Connect to DB before querying
    const products = await Product.find(); // Fetch all products
    return products; // Return the products
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch products!");
  }
};
