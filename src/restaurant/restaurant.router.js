import { Router } from 'express';
import {
  createRestaurant,
  readRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from './restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/', readRestaurant);
restaurantRouter.patch('/', updateRestaurant);
restaurantRouter.delete('/', deleteRestaurant);

export default restaurantRouter;
