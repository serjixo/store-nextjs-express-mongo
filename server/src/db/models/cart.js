import mongoose from 'mongoose'
import {cartSchema} from "../../schemas/CartSchema.js";

export const Cart = mongoose.model("Cart", cartSchema);