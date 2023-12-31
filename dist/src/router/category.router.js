import { Router } from 'express';
import { categoryController } from '../modules/category/controller/category.controller.js';
export const categoryRouter = Router();
categoryRouter.get('./category', categoryController.getCategory);
categoryRouter.post('./category', categoryController.createCategory);
