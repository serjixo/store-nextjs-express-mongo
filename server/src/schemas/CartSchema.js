import mongoose from "mongoose";

export const cartSchema = mongoose.Schema({

    productIds: {
        type: [String],
        required: true,
        default: [],
    },
});

