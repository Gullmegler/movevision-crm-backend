import express from 'express';
import Company from '../models/Company.js';

const router = express.Router();

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Get a specific company by ID
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving company' });
  }
});

// Create or update a company
router.post('/', async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const company = await Company.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: 'Error saving company data' });
  }
});

export default router;

