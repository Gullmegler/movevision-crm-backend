// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import invoiceRoutes from './routes/invoices.js';
import webhookRoutes from './routes/webhooks.js';

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.error('MongoDB error ❌', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/webhooks', webhookRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Move Vision CRM API is running ✅');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
