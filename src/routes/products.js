import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Create or update product
router.post('/', async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const product = await Product.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save product' });
  }
});

export default router;

