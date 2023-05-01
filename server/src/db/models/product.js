import mongoose from "mongoose"
import {ProductSchema} from "../../schemas/ProductSchema.js";


export const Product = mongoose.model('products', ProductSchema)