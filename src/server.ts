import express from 'express';
import 'dotenv/config';
// DATABASE
import connectDB from './config/db';
// ERROR MIDDLEWARE
import errorHandler from './middlewares/errorMiddleware';
// ROUTES
import employeeRoutes from './routes/employeeRoutes';
// ENV
const { PORT } = process.env;
// App Initialize
const app = express();
// Database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', employeeRoutes);

// Error Handler
app.use(errorHandler);

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
