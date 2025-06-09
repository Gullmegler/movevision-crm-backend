import express from 'express';
import Invoice from '../models/Invoice.js';

const router = express.Router();

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
});

// Create or update invoice
router.post('/', async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const invoice = await Invoice.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    res.json(invoice);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save invoice' });
  }
});

export default router;

