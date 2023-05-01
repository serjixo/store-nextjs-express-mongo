import mongoose from "mongoose";

export const CartSchema = mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    ],
});