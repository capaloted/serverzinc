import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// Minimal stub endpoint to accept Apple Pay tokens and "process" them.
// In production, integrate with a PSP like Stripe/Adyen and move funds accordingly.
app.post('/pay', async (req, res) => {
  try {
    const { amountMinor, currency, description, applePayTokenBase64 } = req.body || {};
    if (!amountMinor || !currency || !applePayTokenBase64) {
      return res.status(400).json({ ok: false, error: 'Missing parameters' });
    }

    // Simulate async processing latency
    await new Promise(r => setTimeout(r, 400));

    // For demo purposes, just accept any token and return success
    return res.json({ ok: true, chargeId: `demo_${Date.now()}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Zinc demo server listening on http://localhost:${PORT}`);
});


