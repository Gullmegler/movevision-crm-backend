import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  amount: Number,
  status: { type: String, enum: ['unpaid', 'paid', 'draft'], default: 'draft' },
  dueDate: Date,
  items: [{
    description: String,
    price: Number,
    quantity: Number,
  }],
}, { timestamps: true });

export default mongoose.model('Invoice', InvoiceSchema);
