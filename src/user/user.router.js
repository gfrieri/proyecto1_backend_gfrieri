import { Router } from 'express';
import {
  createUser,
  deleteUser,
  readUserByID,
  readUserByMail,
  updateUser,
} from './user.controller';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:id', readUserByID);
userRouter.get('/:mail/:password', readUserByMail);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
