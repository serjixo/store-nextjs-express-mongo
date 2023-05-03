import express from 'express'
import {validateCart, validateCartUpdate} from "../middlewares/cartValidator.js"
import {createCart, updateCart} from "../controllers/cartsController.js"
import {cartErrorHandler} from "../errors/cartsErrorHandler.js"

const router = express.Router()

router.post('/', validateCart, createCart, cartErrorHandler)
router.put('/:id', validateCartUpdate, updateCart, cartErrorHandler)

export default router

// // import * as dotenv from 'dotenv'
// // import {getProductById, getProductByName, getProducts} from "../controllers/productsController.js"
//
// // dotenv.config()
// //TODO CART
// const router = express.Router()
//
// router.route('/name').get(getProductByNameAndSorted)
// router.route('/:id').get(getProductById)
// router.route('/').get(getProducts)
//
// export default router
// const express = require('express')

