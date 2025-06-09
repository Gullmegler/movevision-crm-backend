import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  title: String,
  description: String,
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  data: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export default mongoose.model('Report', ReportSchema);
