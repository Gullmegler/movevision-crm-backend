import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  name: String,
  orgNumber: String,
  email: String,
  phone: String,
  address: String,
  logoUrl: String,
  googleReviewLink: String,
  invoiceFooter: String,
}, { timestamps: true });

export default mongoose.model('Company', CompanySchema);
