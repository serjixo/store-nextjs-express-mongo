import {Product} from "../db/models/product.js"

export const getProducts = async (req, res, next) => {
    try {
        const {page = 1, limit = 9} = req.query
        const skip = (page - 1) * limit
        const products = await Product.find()
            .skip(skip)
            .limit(limit)
            .lean()
        const count = await Product.countDocuments()
        const totalPages = Math.ceil(count / limit)
        res.status(200).json({
            data: products,
            page,
            totalPages,
            totalItems: count,
        })
    } catch (err) {
        next(err)
    }
}

export const getProductById = async (req, res, next) => {

    try {
        const {id} = req.params

        const product = await Product.find({_id: id}).lean()

        if (!product) {
            return res.status(404).json({message: 'Product not found'})
        }

        res.status(200).json({data: product})
    } catch (err) {
        next(err)
    }
}
export const getProductsSorted = async (req, res) => {

    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 9) : 9;
    const count = await Product.countDocuments()
    const totalPages = Math.ceil(count / pageSize)

    const sortField = req.query.sortBy ? req.query.sortBy : 'price';
    const sortOrder = req.query.sortOrder && req.query.sortOrder.toLowerCase() === 'desc' ? -1 : 1;

    const skipIndex = (page - 1) * pageSize;

    try {
        const products = await Product.find({})
            .sort({[sortField]: sortOrder})
            .skip(skipIndex)
            .limit(pageSize);
        res.json({
            data: products,
            page,
            totalPages,
            totalItems: count,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }

}

export const getProductByNameAndSorted = async (req, res, next) => {
    try {
        const {page = 1, limit = 9, name} = req.query
        const skip = (page - 1) * limit
        const query = name ? {productName: {$regex: name, $options: 'i'}} : {}

        const sortField = req.query.sortProperty ? req.query.sortProperty : 'productName';
        const sortOrder = req.query.sortDirection && req.query.sortDirection.toLowerCase() === 'desc' ? -1 : 1;

        const products = await Product.find(query)
            .sort({[sortField]: sortOrder})
            .skip(skip)
            .limit(limit)
            .lean()

        const count = await Product.countDocuments(query)

        const totalPages = Math.ceil(count / limit)

        res.status(200).json({
            data: products,
            page,
            totalPages,
            totalItems: count,
        })
    } catch (err) {
        next(err)
    }
}
