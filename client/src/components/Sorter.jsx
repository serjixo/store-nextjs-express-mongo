import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

export default function Sorter({ onUpdate }) {
    const [sortProperty, setSortProperty] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from API when component mounts
        fetchProducts().then(data => {
            const properties = Object.keys(data[0]);
            setProperties(properties);
            setSortProperty(properties[0]); // Default to first property
        });
    }, []);

    function handleSort() {
        onUpdate(sortProperty, sortDirection);
    }

    return (
        <div className="flex justify-center items-center space-x-4">
            <label htmlFor="sort-property" className="font-bold">
                Sort by:
            </label>
            <select
                id="sort-property"
                value={sortProperty}
                onChange={e => setSortProperty(e.target.value)}
                className="bg-white rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                {properties.map(property => (
                    <option key={property} value={property}>
                        {property}
                    </option>
                ))}
            </select>
            <label htmlFor="sort-direction" className="font-bold">
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
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
                Sort
            </button>
        </div>
    );
}