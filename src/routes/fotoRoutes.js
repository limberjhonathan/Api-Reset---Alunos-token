import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/fotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;

// npx sequelize migration:create --name=criar-tabela-de-foto-do-aluno
