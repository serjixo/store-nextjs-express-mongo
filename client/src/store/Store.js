import {proxy} from "valtio";

export const dataState = proxy({
    intro: true,
    color: '#81BEF7',
    products: [],
    cartProductsIds: [],
    cartId: '',
    productToDetail: ''
})
export default dataState