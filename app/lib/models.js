// lib/models.js
import mongoose from "mongoose";

// --- User Schema ---
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

// --- Product Schema ---
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// --- Exports ---
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
