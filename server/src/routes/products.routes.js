import express from 'express'
// import * as dotenv from 'dotenv'
import {getProductById, getProductByName, getProducts, getProductsSorted} from "../controllers/productsController.js"
import {pagination} from "../middlewares/pagination.js";
import {Product} from "../db/models/product.js";

// dotenv.config()

const router = express.Router()

router.route('/sort').get(pagination(Product), getProductsSorted)
router.route('/name').get(pagination(Product), getProductByName)
router.route('/:id').get(getProductById)
router.route('/').get(pagination(Product), getProducts)

export default router