import express from 'express'
// import * as dotenv from 'dotenv'
// import {getProductById, getProductByName, getProducts} from "../controllers/productsController.js"

// dotenv.config()
//TODO CART
const router = express.Router()

router.route('/name').get(getProductByName)
router.route('/:id').get(getProductById)
router.route('/').get(getProducts)

export default router