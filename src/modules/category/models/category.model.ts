import { model } from 'mongoose';
import { categorySchema, ICategory } from '../schema/category.schema.js';

export const  CategoryModel = model<ICategory> ('category', categorySchema);