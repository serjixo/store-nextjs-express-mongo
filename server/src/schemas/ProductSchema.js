import mongoose from "mongoose";

export const ProductSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    maxTravellers: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    location: {
        country: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        timeZone: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
    productInfo: {
        timeStart: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
    },
    provider: {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    schedule: {
        from: {
            type: Date,
            required: true,
        },
        to: {
            type: Date,
            required: true,
        },
    },
    rates: {
        toddler: {
            maxAge: {
                type: Number,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
        },
        preschool: {
            maxAge: {
                type: Number,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
        },
        adult: {
            maxAge: {
                type: Number,
            },
            price: {
                type: String,
                required: true,
            },
        },
    },
    tags: [String],
})