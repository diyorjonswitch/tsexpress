import { model } from 'mongoose';
import { IFLower, flowerSchema } from '../schemas/flower.schema.js';

export const FlowerModel = model<IFLower>('flower', flowerSchema)