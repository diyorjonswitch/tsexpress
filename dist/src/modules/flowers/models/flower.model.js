import { model } from 'mongoose';
import { flowerSchema } from '../schemas/flower.schema.js';
export const FlowerModel = model('flower', flowerSchema);
