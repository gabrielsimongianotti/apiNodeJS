import { Router } from 'express';

const curriculumRouter = Router();

curriculumRouter.get('/', async (_request, response) => {
  return response.status(200).json({});
});

curriculumRouter.post('/', async (request, response) => {
  return response.status(200).json({});
});

curriculumRouter.put('/', async (request, response) => {
  return response.status(200).json({});
});

export default curriculumRouter;
