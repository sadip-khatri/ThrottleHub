
import express from "express";
import Stripe from "stripe";
import dotenv from 'dotenv'

dotenv.config();


const router = express.Router();
const stripeSecret = process.env.STRIPE_SECRET_KEY;
console.log(stripeSecret)
if (!stripeSecret) {
  throw new Error("Stripe secret key is missing in environment variables.");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;
  console.log("Received cart items:", req.body.cartItems);
  console.log("Creating session with:", JSON.stringify(cartItems, null, 2));

const BASE_IMAGE_URL = "http://localhost:5173";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
     line_items: cartItems.map((item) => ({
  price_data: {
    currency: "usd",
    product_data: {
      name: item.title,
      images: [item.image.startsWith("http") ? item.image : `${BASE_IMAGE_URL}${item.image}`],
    },
    unit_amount: Math.round(item.price * 100),
  },
  quantity: item.quantity,
})),
     success_url: "http://localhost:5173/success",
cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
