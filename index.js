const express = require("express");
const cors = require("cors");
const compression = require("compression");
require("dotenv").config();

const connectDb = require("./utils/connectDb");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(compression());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_BASE_URL,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello from LocalCart Server");
});

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port ${PORT}`);
});
