import {proxy} from "valtio";

const paginationState = proxy({
    currentPage: 1,
    totalPages: 1,
    filterActive: false,
    filterTerm: ''
})
export default paginationState