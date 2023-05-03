import {useState} from 'react';
import paginationState from "@component/store/PaginationStore";
// import { fetchProducts } from '../api/products';

export default function Sorter({onUpdate}) {
    const [sortProperty, setSortProperty] = useState('productName');
    const [sortDirection, setSortDirection] = useState('asc');

    function handleSort() {
        if (sortProperty || sortDirection) {
            paginationState.sortProperty = sortProperty
            paginationState.sortDirection = sortDirection
            paginationState.currentPage = 1
        }
    }

    return (
        <div className="flex justify-center items-center space-x-4">
            <label htmlFor="sort-property " className="font-bold text-white">
                Sort by:
            </label>
            <select
                id="sort-property"
                value={sortProperty}
                onChange={e => setSortProperty(e.target.value)}
                className="bg-blue rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value={'productName'}>name</option>
                <option value={'price'}>price</option>

            </select>
            <label htmlFor="sort-direction" className="font-bold text-white">
                Direction:
            </label>
            <select
                id="sort-direction"
                value={sortDirection}
                onChange={e => setSortDirection(e.target.value)}
                className="bg-white rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button
                onClick={handleSort}
                className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
                Sort
            </button>
        </div>
    );
}