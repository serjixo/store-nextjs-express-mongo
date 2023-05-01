import dataState from "@component/store/Store";
import paginationState from "@component/store/PaginationStore";

const PRODUCTS_URL = "http://localhost:8080/products";

export async function fetchProducts() {
    const url = "http://localhost:8080/products";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dataState.products = data
    return data;
}

export async function fetchProductsPage(page) {
    const params = new URLSearchParams({page});
    const url = `${PRODUCTS_URL}?${params.toString()}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        dataState.products = data
        return data;
    } catch (error) {
        console.error('An error occurred while fetching products:', error);
        throw error;
    }
}

export async function fetchProductsFilterName(page, name) {
    const params = new URLSearchParams({page, name});
    const url = `${PRODUCTS_URL}/name?${params.toString()}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        dataState.products = data;
        // debugger;
        paginationState.totalPages = data.totalPages
        paginationState.currentPage = data.page

        return data;
    } catch (error) {
        console.error('An error occurred while fetching products:', error);
        throw error;
    }
}