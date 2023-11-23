import {Schema} from 'mongoose';

export interface ICategory {
    name: string
}

export const categorySchema = new Schema<ICategory> ({
    name: {type: String, required: true}
})