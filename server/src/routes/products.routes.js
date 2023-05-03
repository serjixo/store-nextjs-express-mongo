import express from 'express'
import {getProductById, getProductByNameAndSorted, getProducts, getProductsSorted} from "../controllers/productsController.js"
import {pagination} from "../middlewares/pagination.js";
import {Product} from "../db/models/product.js";


const router = express.Router()

router.route('/sort').get(pagination(Product), getProductsSorted)
router.route('/name').get(pagination(Product), getProductByNameAndSorted)
router.route('/:id').get(getProductById)
router.route('/').get(pagination(Product), getProducts)

export default router