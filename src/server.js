import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.js";
import invoiceRoutes from "./routes/invoice.js";
import webhookRoutes from "./routes/webhooks.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB-tilkobling
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// API-ruter
app.use("/api/auth", authRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/webhooks", webhookRoutes);
app.use("/api/users", userRoutes);

// Helse-endepunkt for å sjekke at API kjører
app.get("/", (req, res) => {
  res.send("✅ Move Vision CRM API is running");
});

// Ping MongoDB direkte
app.get("/ping-mongo", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("✅ MongoDB connection is working!");
  } catch (err) {
    res.status(500).send("❌ MongoDB connection failed: " + err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
