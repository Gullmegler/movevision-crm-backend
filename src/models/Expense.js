import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  description: String,
  amount: Number,
  date: Date,
  category: String,
}, { timestamps: true });

export default mongoose.model('Expense', ExpenseSchema);
