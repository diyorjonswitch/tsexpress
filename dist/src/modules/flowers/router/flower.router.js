import { Router } from 'express';
import { FlowerController } from '../controller/flower.controller.js';
export const flowerRouter = Router();
flowerRouter.get('/flowers', FlowerController.getFlower);
flowerRouter.post('/flowers/:id', FlowerController.createFlower);
