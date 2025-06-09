import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

// Create or update expense
router.post('/', async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const expense = await Expense.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save expense' });
  }
});

export default router;

