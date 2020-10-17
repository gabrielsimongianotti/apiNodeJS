import { Router } from 'express';

import usersRouter from './users.routes';
import curriculumRouter from './curriculum.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/curriculum', curriculumRouter);

export default routes;
