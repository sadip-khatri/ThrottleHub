import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', authenticate, createProduct); // Protected
router.put('/:id', authenticate, updateProduct); // Protected
router.delete('/:id', authenticate, deleteProduct); // Protected

export default router;
