import {body, param} from "express-validator";

export const validateCart = [
    body('productId').isString().trim().notEmpty(),
];

export const validateCartUpdate = [
    param('id').isMongoId(),
    body('productId').isString().trim().notEmpty(),
];