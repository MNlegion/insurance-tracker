const path = require("path");
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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Any route that is not the above routes will point to index.html
  app.get("*", (req, res) => 
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  )
} else {
    app.get("/", (req, res) => 
        res.send("API is running...")
    )};

// Error Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
