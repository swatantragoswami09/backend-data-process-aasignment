const express = require("express");
const mongoose = require("mongoose");
const uploadRoute = require("./routes/upload");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Set up MongoDB connection using Mongoose (adjust the connection string)
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

app.use("/api", uploadRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
