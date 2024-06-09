const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv").config();

const app = express();

// Middlewares

app.use(bodyParser());
app.use(cors());
app.use("/api/auth", authRoutes); // Corrected route prefix with a leading slash

// Connection URL (ensure the database name is specified)
const url = process.env.MONGO_URL;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
