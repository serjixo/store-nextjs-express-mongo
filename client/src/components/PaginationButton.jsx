import {useSnapshot} from "valtio";
import paginationState from "@component/store/PaginationStore";

export default function PaginationButton({handleClick, disabled, text}) {
    let {currentPage} = useSnapshot(paginationState);
    // currentPage = currentPage ? currentPage : 1;
    return (
        <>
            <button
                className={`border rounded py-2 px-4 ml-2 ${
                    currentPage === 1 ? 'text-gray-500 pointer-events-none' : 'text-white'
                }`}
                onClick={handleClick}
                disabled={disabled}
            >
                {text}
            </button>

           
        </>
    )
}
