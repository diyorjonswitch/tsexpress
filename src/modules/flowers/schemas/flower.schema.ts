import {Schema, Types} from 'mongoose'

export interface IFLower {
    name: string,
    price: number,
    image: string,
    category?: Types.ObjectId
}

export const flowerSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' }
})