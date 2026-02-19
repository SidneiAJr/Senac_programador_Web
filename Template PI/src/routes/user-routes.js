import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";
import {authMiddleware} from '../middlewares/Auth-middleware.js'

const router = Router();
router.get('/user',authMiddleware,UserController.index);
router.get('/user/:id',authMiddleware,UserController.findID);
router.post('/user',UserController.register)
router.delete('/user/:id',authMiddleware,UserController.delete);
router.put('/user/:id',authMiddleware,UserController.update);
router.post('/user/login',UserController.login);



export default router

