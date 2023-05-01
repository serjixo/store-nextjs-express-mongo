import mongoose from 'mongoose'

export const normalizeProductId = (req, res, next) => {
    const {id} = req.params

    if (id && typeof id === 'string') {
        req.params.id = new mongoose.Types.ObjectId(id).toString()
    }

    next()
}
export const convertToObjectId = (req, res, next) => {


    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: 'Invalid id'})
    }
    req.params.id = mongoose.Types.ObjectId(id)
    next()
}
export const normalizeProductsIds = (req, res, next) => {
    const products = req.body

    for (let i = 0; i < products.length; i++) {
        const product = products[i]

        if (product._id && typeof product._id === 'string') {
            product._id = new mongoose.Types.ObjectId(product._id)
        }
    }

    next()
}