import {AnimatePresence, motion} from "framer-motion";
import {useSnapshot} from "valtio";
import {fadeAnimation, slideAnimation} from "@component/utils/motion";
import dataState from "@component/store/Store";
import CustomButton from "@component/components/CustomButton";
import {useEffect, useState} from "react";
import {fetchProductsFilterName} from "@component/pages/api/products";
import ProductCard from "@component/components/ProductCard";
import {FilterSearchInput} from "@component/components/FilterSearchInput";
import paginationState from "@component/store/PaginationStore";
import AnimatedText from "@component/components/AnimatedText";
import PaginationButtons from "@component/components/PaginationButtons";

export default function Products() {

    const snap = useSnapshot(dataState);
    const paginationSnap = useSnapshot(paginationState);
    const {products} = useSnapshot(dataState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductsFilterName(paginationSnap.currentPage, paginationSnap.filterTerm).then(() => setLoading(false));
    }, [paginationSnap.currentPage]);


    return (
        <AnimatePresence>
            {!snap.intro && (
                <>

                    <div className={'m-20'}>
                        <AnimatedText text={'Adventures.'}/>
                    </div>
                    <motion.div
                        {...slideAnimation('right')}
                        {...fadeAnimation}
                        className={'grid grid-cols-1 grid-rows-2 mx-20 my-20'}
                    >
                        <motion.div
                        >
                            <CustomButton
                                type="filled"
                                title="Go Back"
                                handleClick={() => dataState.intro = true}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm m-5"
                            />
                            <FilterSearchInput customStyles="m-auto" onSearch={fetchProductsFilterName}/>
                        </motion.div>

                    </motion.div>

                    <motion.div
                        {...slideAnimation('right')}
                        {...fadeAnimation}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto my-8 md:my-12 px-4 md:px-12"
                    >


                        {products.data && !loading && products.data.map((product) => (
                            <ProductCard product={product}></ProductCard>
                        ))}


                    </motion.div>

                    <motion.div className="flex justify-center my-6">
                        <PaginationButtons/>
                        {/*<button*/}
                        {/*    className={`border rounded py-2 px-4 ml-2 ${*/}
                        {/*        paginationSnap.currentPage === 1 ? 'text-gray-500 pointer-events-none' : 'text-white'*/}
                        {/*    }`}*/}
                        {/*    onClick={handlePrevClick}*/}
                        {/*    disabled={paginationSnap.currentPage === 1}*/}
                        {/*>*/}
                        {/*    Prev*/}
                        {/*</button>*/}
                        {/*<div className={'py-2 px-8 ml-2 text-white'}>{paginationSnap.currentPage}</div>*/}
                        {/*<button*/}
                        {/*    className={` border rounded py-2 px-4 ml-2 ${*/}
                        {/*        paginationSnap.currentPage === products.totalPages ? 'text-gray-500 pointer-events-none' : 'text-white'*/}
                        {/*    }`}*/}
                        {/*    onClick={handleNextClick}*/}
                        {/*    disabled={paginationSnap.currentPage === products.totalPages}*/}
                        {/*>*/}
                        {/*    Next*/}
                        {/*</button>*/}

                    </motion.div>


                </>
            )}
        </AnimatePresence>
    )
}
