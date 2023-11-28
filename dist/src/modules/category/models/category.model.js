import { model } from 'mongoose';
import { categorySchema } from '../schemas/category.schema.js';
export const CategoryModel = model('category', categorySchema);
