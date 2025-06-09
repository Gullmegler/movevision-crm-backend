import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
