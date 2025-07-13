// server.js or subscribe.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send("Email is required");

  // Setup nodemailer (example with Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourcompanyemail@gmail.com",
      pass: "your_app_password", // Use app password or secure env var
    },
  });

  const mailOptions = {
    from: "yourcompanyemail@gmail.com",
    to: email,
    subject: "Welcome to 246 Impex!",
    text: `Thank you for subscribing to 246 Impex. Stay tuned for the latest tech updates and insights!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
