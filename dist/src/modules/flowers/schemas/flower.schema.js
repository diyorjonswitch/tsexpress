import { Schema } from 'mongoose';
export const flowerSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' }
});
