import { Router } from 'express';
import {
  createRestaurant,
  readRestaurant,
  readRestaurants,
  updateRestaurant,
  deleteRestaurant,
} from './restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/:id', readRestaurant);
restaurantRouter.get('/', readRestaurants);
restaurantRouter.patch('/:id', updateRestaurant);
restaurantRouter.delete('/:id', deleteRestaurant);

export default restaurantRouter;
