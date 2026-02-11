import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";

const router = Router();
router.get('/user',UserController.index);
router.get('/user/:id',UserController.findID);
router.post('/user',UserController.register)



