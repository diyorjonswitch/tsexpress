import { Schema, Types } from 'mongoose';
export const categorySchema = new Schema({
    name: { type: String, required: true },
    flowers: [{
            type: Types.ObjectId, ref: 'flower'
        }]
});
