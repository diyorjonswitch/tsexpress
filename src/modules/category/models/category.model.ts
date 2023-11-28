import { model } from 'mongoose';
import { categorySchema, ICategory } from '../schemas/category.schema.js';

export const  CategoryModel = model<ICategory> ('category', categorySchema);