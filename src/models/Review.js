import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  rating: { type: Number, min: 1, max: 10, required: true },
  message: { type: String },
  sentAt: { type: Date, default: Date.now },
  source: { type: String, enum: ['email', 'popup'], default: 'email' },
  responded: { type: Boolean, default: false },
  redirectUrl: { type: String }, // f.eks. Google Review-lenke
}, { timestamps: true });

export default mongoose.model('Review', ReviewSchema);
