import {useState} from 'react';
import dataState from "@component/store/Store";
import {useSnapshot} from "valtio";
import paginationState from "@component/store/PaginationStore";
import {fetchProducts} from "@component/pages/api/products";

export const FilterSearchInput = ({onSearch, customStyles}) => {
    const [searchTerm, setSearchTerm] = useState('');
    let paginationSnap = useSnapshot(paginationState);

    const handleChange = (event) => {
        if (searchTerm === '') {
            fetchProducts()
            paginationState.currentPage = 1
        }
        paginationState.filterTerm = event.target.value
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dataState.filterActive = true
        onSearch(paginationSnap.currentPage, searchTerm);
    };

    const handleDeleteFilter = () => {
        setSearchTerm('')
        paginationState.currentPage = 1
        paginationState.filterTerm = ''
        fetchProducts()
    }

    return (
        <div className={customStyles}>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search products"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button
                        className="flex-shrink-0 mx-5 border rounded hover:border-blue-700 text-sm border-1 text-white py-1 px-2 rounded"
                        onClick={handleDeleteFilter}
                    >
                        X
                    </button>
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"

                    >
                        Search
                    </button>

                </div>
            </form>
        </div>
    );
};
