import dataState from '@component/store/Store'

const CARTS_URL = 'http://localhost:8080/carts'


export default async function handleNewCartCreation(productId) {

    try {
        const response = await fetch(CARTS_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(error)
        }

        const data = await response.json()
        dataState.cartId = data._id
        dataState.cartProductsIds.push(productId)
        return data


    } catch (error) {
        console.error(error)
        throw new Error('Internal server error')
    }

}

export const updateCart = async (cartId, productId) => {
    try {
        const response = await fetch(`${CARTS_URL}/${cartId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId})
        })

        if (!response.ok) {
            const errorMessage = await response.text()
            throw new Error(errorMessage)
        }

        const updatedCart = await response.json()
        dataState.cartProductsIds.push(productId)
        return updatedCart
    } catch (error) {
        console.error(error)
        throw new Error('Failed to update cart')
    }
}