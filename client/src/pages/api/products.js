import dataState from '@component/store/Store'

const PRODUCTS_URL = 'http://localhost:8080/products'


function handleFetchError(response) {
    const error = new Error(`HTTP error! status: ${response.status}`)
    console.error('An error occurred while fetching products:', error)
    return Promise.reject(error)
}


async function handleDataResponse(response) {
    const data = await response.json()
    dataState.products = data
    return data;
}

async function handleResponse(response) {
    if (!response.ok) {
        await handleFetchError(response)
    }
    const data = await handleDataResponse(response)
    return data;
}

export async function fetchProducts() {
    const response = await fetch(PRODUCTS_URL)
    const data = await handleResponse(response);
    return data
}

export async function fetchProductsFilterName(page, name, sortProperty, sortDirection) {
    const params = new URLSearchParams({page, name, sortProperty, sortDirection})
    const url = `${PRODUCTS_URL}/name?${params.toString()}`

    try {
        const response = await fetch(url)
        const data = await handleResponse(response);

        return data
    } catch (error) {
        console.error('An error occurred while fetching products:', error)
        throw error
    }
}
