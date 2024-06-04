import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, userController.index);// lista usuários
router.get('/', userController.index);// lista usuários
router.get('/:id', userController.show);// Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga o usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário ->  PATCH OU PUT
*/
