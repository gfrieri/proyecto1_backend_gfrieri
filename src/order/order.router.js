import { Router } from 'express';
import {
  createOrder,
  readOrder,
  readOrders,
  readSent,
  updateOrder,
  deleteOrder,
} from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:id', readOrder);
orderRouter.get('/', readOrders);
orderRouter.get('/sent/', readSent);
orderRouter.patch('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);

export default orderRouter;
