import {Cart} from "../db/models/cart.js";
import {Product} from "../db/models/product.js";

export const createCart = async (req, res, next) => {
    try {
        const {productId} = req.body;
        const product = await Product.find({_id: productId});

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        const cart = new Cart();
        console.log('cart', cart)
        console.log('req.body', req.body)
        cart.productIds.push(productId)
        const savedCart = await cart.save();

        res.json(savedCart);
    } catch (error) {
        next(error);
    }
};

export const updateCart = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {productId} = req.body;

        const cart = await Cart.findById(id);

        if (!cart) {
            return res.status(404).json({message: 'Cart not found'});
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        cart.productIds.push(product._id);

        const savedCart = await cart.save();

        res.json(savedCart);
    } catch (error) {
        next(error);
    }
};
