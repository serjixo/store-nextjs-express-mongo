import {useSnapshot} from "valtio";
import paginationState from "@component/store/PaginationStore";
import dataState from "@component/store/Store";

export default function PaginationButtons(props) {
    let paginationSnap = useSnapshot(paginationState);
    const {products} = useSnapshot(dataState);

    function handlePrevClick() {
        paginationState.currentPage -= 1
    }

    function handleNextClick() {
        paginationState.currentPage += 1
    }

    return (
        <>
            <button
                className={`border rounded py-2 px-4 ml-2 ${
                    paginationSnap.currentPage === 1 ? 'text-gray-500 pointer-events-none' : 'text-white'
                }`}
                onClick={handlePrevClick}
                disabled={paginationSnap.currentPage === 1}
            >
                Prev
            </button>
            <div className={'py-2 px-8 ml-2 text-white'}>{paginationSnap.currentPage}</div>
            <button
                className={` border rounded py-2 px-4 ml-2 ${
                    paginationSnap.currentPage === products.totalPages ? 'text-gray-500 pointer-events-none' : 'text-white'
                }`}
                onClick={handleNextClick}
                disabled={paginationSnap.currentPage === products.totalPages}
            >
                Next
            </button>
        </>
    )
}
