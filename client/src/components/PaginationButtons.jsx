import {useSnapshot} from "valtio";
import paginationState from "@component/store/PaginationStore";
import PaginationButton from "@component/components/PaginationButton";

export default function PaginationButtons(props) {
debugger;
    let paginationSnap = useSnapshot(paginationState);

    function handlePrevClick() {
        debugger;
        paginationState.currentPage -= 1
    }

    function handleNextClick() {
        paginationState.currentPage += 1
    }

    return (
        <>
            <PaginationButton handleClick={handlePrevClick} disabled={paginationSnap.currentPage === 1} text={'Prev'}/>

            <div className={'py-2 px-8 ml-2 text-white'}>{paginationSnap.currentPage}</div>
            <PaginationButton handleClick={handleNextClick} disabled={false} text={'Next'}/>
            {/*<button*/}
            {/*    className={`border rounded py-2 px-4 ml-2 ${*/}
            {/*        paginationSnap.currentPage === 1 ? 'text-gray-500 pointer-events-none' : 'text-white'*/}
            {/*    }`}*/}
            {/*    onClick={handlePrevClick}*/}
            {/*    disabled={paginationSnap.currentPage === 1}*/}
            {/*>*/}
            {/*    Prev*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={` border rounded py-2 px-4 ml-2 ${*/}
            {/*        paginationSnap.currentPage === products.totalPages ? 'text-gray-500 pointer-events-none' : 'text-white'*/}
            {/*    }`}*/}
            {/*    onClick={handleNextClick}*/}
            {/*    disabled={paginationSnap.currentPage === products.totalPages}*/}
            {/*>*/}
            {/*    Next*/}
            {/*</button>*/}
        </>
    )
}
