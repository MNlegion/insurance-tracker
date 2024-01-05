const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Initialize express
const app = express();

// Middleware to allow req.body to be used in controllers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes using baseline path
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
