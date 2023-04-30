import { Router } from 'express';
import {
  createUser,
  readUserByID,
  readUserByMail,
  updateUser,
  deleteUser,
} from './user.controller';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:id', readUserByID);
userRouter.get('/:mail/:password', readUserByMail);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
