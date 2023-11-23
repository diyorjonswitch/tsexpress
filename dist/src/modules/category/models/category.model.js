import { model } from 'mongoose';
import { categorySchema } from '../schema/category.schema.js';
export const CategoryModel = model('category', categorySchema);
