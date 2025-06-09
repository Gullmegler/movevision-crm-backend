import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  zip: String,
  county: String,
  moveFrom: String,
  moveTo: String,
  moveDate: Date,
  note: String,
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema);
