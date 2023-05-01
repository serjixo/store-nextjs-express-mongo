import {proxy} from "valtio";

export const dataState = proxy({
    intro: true,
    color: '#81BEF7',
    products: [],
    cart: [],
})
export default dataState