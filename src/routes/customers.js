import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

// Get customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve customer' });
  }
});

// Create or update customer
router.post('/', async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const customer = await Customer.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save customer' });
  }
});

export default router;

