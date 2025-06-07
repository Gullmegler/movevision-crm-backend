// routes/webhooks.js
import express from 'express';

const router = express.Router();

// Handle POST requests from CRM integrations
router.post('/quickbooks', (req, res) => {
  try {
    const data = req.body;
    console.log('📬 Received QuickBooks webhook:', data);

    // TODO: Integrate with QuickBooks Online API here
    res.status(200).json({ success: true, message: 'Webhook received' });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

