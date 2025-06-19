import express from 'express';
import authRoutes from './authRoutes';
import { home } from '../controllers/homeController';
import productRoutes from './productRoutes'
import dotenv from 'dotenv'
import { connectDB } from '../config/db';


const router = express.Router();
dotenv.config();
connectDB();
router.get('/', home);
router.use('/auth', authRoutes);
router.use('/products', productRoutes);


export default router;
