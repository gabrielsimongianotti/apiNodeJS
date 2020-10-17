import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
  return response.status(200).json({});
});

userRouter.post('/', async (request, response) => {
  return response.status(200).json({});
});

userRouter.put('/', async (request, response) => {
  return response.status(200).json({});
});

export default userRouter;
