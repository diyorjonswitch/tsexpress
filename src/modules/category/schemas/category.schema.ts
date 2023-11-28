import {Schema, Types} from 'mongoose';
import { IFLower } from '../../flowers/schemas/flower.schema.js';

export interface ICategory {
    name: string
    flowers?: Array<IFLower>
}

export const categorySchema = new Schema<ICategory> ({
    name: {type: String, required: true},
    flowers: [{
        type: Types.ObjectId, ref: 'flower'
    }]
})