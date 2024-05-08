
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/expenses',  expenseRoutes);
app.use('/api/categories', authMiddleware, categoryRoutes);

export { app };