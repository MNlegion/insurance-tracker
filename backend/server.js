const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

// Middleware to allow req.body to be used in controllers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes using baseline path
app.use('/api/items', require('./routes/itemRoutes'));

// Error Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));