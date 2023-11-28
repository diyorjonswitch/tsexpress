import { Router } from 'express';
import { categoryController } from '../controller/category.controller.js';

export const categoryRouter: Router = Router();

categoryRouter.get('./category', categoryController.getCategory)
categoryRouter.post('./category', categoryController.createCategory)