import express from 'express';
import Invoice from '../models/Invoice.js';
import Expense from '../models/Expense.js';

const router = express.Router();

// Basic revenue and cost report
router.get('/summary', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const expenses = await Expense.find();

    const totalRevenue = invoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
    const totalExpenses = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
    const profit = totalRevenue - totalExpenses;

    res.json({
      totalRevenue,
      totalExpenses,
      profit,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

export default router;

