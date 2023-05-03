import {useState} from 'react';
import {useSnapshot} from "valtio";
import paginationState from "@component/store/PaginationStore";
import {fetchProducts} from "@component/pages/api/products";

export const FilterSearchInput = ({onSearch, customStyles}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = async (event) => {
        //Todo this version of course does a fetch every keystroke,
        // that is not very performant but since is local version, is awesome to get fast response every keystroke

        paginationState.currentPage = 1
        paginationState.filterTerm = event.target.value
        setSearchTerm(event.target.value);
        await fetchProducts()
    };


    const handleDeleteFilter = () => {
        setSearchTerm('')
        paginationState.filterTerm = ''
    }

    return (
        <div className={customStyles}>
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

            </div>
        </div>
    );
};
