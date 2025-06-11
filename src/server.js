import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

import authRoutes from "./routes/auth.js";
import invoiceRoutes from "./routes/invoice.js";
import webhookRoutes from "./routes/webhooks.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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

// ✅ Ny: Google Maps-rute for avstand og koordinater
app.post("/api/maps/calculate", async (req, res) => {
  const { fromAddress, toAddress } = req.body;

  try {
    // Geokoding
    const geoFrom = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: { address: fromAddress, key: GOOGLE_MAPS_API_KEY },
    });

    const geoTo = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: { address: toAddress, key: GOOGLE_MAPS_API_KEY },
    });

    const fromCoords = geoFrom.data.results[0]?.geometry.location;
    const toCoords = geoTo.data.results[0]?.geometry.location;

    if (!fromCoords || !toCoords) {
      return res.status(400).json({ error: "Fant ikke koordinater for en eller begge adresser." });
    }

    // Distance Matrix
    const distanceRes = await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json", {
      params: {
        origins: `${fromCoords.lat},${fromCoords.lng}`,
        destinations: `${toCoords.lat},${toCoords.lng}`,
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    const distanceData = distanceRes.data.rows[0]?.elements[0];

    res.json({
      fromCoords,
      toCoords,
      distance: distanceData?.distance?.text || "Ukjent",
      duration: distanceData?.duration?.text || "Ukjent",
    });
  } catch (err) {
    console.error("❌ Google Maps API error:", err.message);
    res.status(500).json({ error: "Feil ved bruk av Google Maps API." });
  }
});

// Helse-endepunkt
app.get("/", (req, res) => {
  res.send("✅ Move Vision CRM API is running");
});

app.get("/ping-mongo", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("✅ MongoDB connection is working!");
  } catch (err) {
    res.status(500).send("❌ MongoDB connection failed: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
