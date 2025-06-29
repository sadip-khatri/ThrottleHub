import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    size: [{ type: String }],
    color: { type: String },
    mainImage: { type: String },
    thumbnails: [{ type: String }],
    description: { type: String },
    condition: { type: String },
    fit: { type: String },
    story: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
