import mongoose from "mongoose";

export const cartSchema = mongoose.Schema({
    // id: {
    //     type: mongoose.Types.ObjectId,
    //     default: mongoose.Types.ObjectId,
    //     required: true,
    // },
    productIds: {
        type: [String],
        required: true,
        default: [],
    },
});

