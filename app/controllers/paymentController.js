// controllers/stripeController.js
import Stripe from 'stripe';
import dotenv from 'dotenv';
import StripeTransaction from '../models/paymentModel.js';

// Load environment variables
dotenv.config();

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export const createPayment = async (req, res) => {
  try {
    const { paymentMethodId, amount, currency = 'usd', email } = req.body;

    // Validate input
    if (!paymentMethodId || !amount || !email) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    if (amount < 50) {
      return res.status(400).json({ error: 'Amount must be at least $0.50 USD.' });
    }

    // Create and confirm PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

    // Save transaction in DB
    await StripeTransaction.create({
      amount,
      currency,
      email,
      paymentMethodId,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
    });

    return res.status(200).json({
      success: true,
      message: 'Payment successful',
      paymentIntent,
    });

  } catch (error) {
    console.error('Payment Error:', error.message);
    return res.status(400).json({
      success: false,
      error: error.message || 'Something went wrong',
    });
  }
};
