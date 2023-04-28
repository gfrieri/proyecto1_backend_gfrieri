import { Router } from 'express';
import {
  createProduct,
  readProduct,
  readProducts,
  deleteProduct,
  updateProduct,
} from './product.controller';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/:id', readProduct);
productRouter.get('/', readProducts);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;
