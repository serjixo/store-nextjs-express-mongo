import {AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'
import {fadeAnimation, slideAnimation} from '@component/utils/motion'
import dataState from '@component/store/Store'
import CustomButton from '@component/components/CustomButton'
import {useEffect, useState} from 'react'
import {fetchProductsFilterName} from '@component/pages/api/products'
import {FilterSearchInput} from '@component/components/FilterSearchInput'
import paginationState from '@component/store/PaginationStore'
import AnimatedText from '@component/components/AnimatedText'
import Sorter from '@component/components/Sorter'
import ProductCard from '@component/components/ProductCard'
import PaginationButtons from '@component/components/PaginationButtons'
import CartLink from '@component/components/CartLink'

export default function Products() {

    const {products, intro} = useSnapshot(dataState)
    const paginationSnap = useSnapshot(paginationState)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProductsFilterName(paginationSnap.currentPage, paginationSnap.filterTerm, paginationSnap.sortProperty, paginationSnap.sortDirection).then(() => setLoading(false))
    }, [paginationSnap.currentPage, paginationSnap.filterTerm, paginationSnap.sortProperty, paginationSnap.sortDirection])


    return (
        <AnimatePresence>
            {!intro && (
                <>

                    <motion.div
                        className={'m-20 grid grid-cols-2 '}
                        {...slideAnimation('right')}
                        {...fadeAnimation}
                    >
                        <AnimatedText text={'Adventures.'}/>

                        <CustomButton
                            type='filled'
                            title='Go Back'
                            handleClick={() => dataState.intro = true}
                            customStyles='w-fit px-4 py-2.5 font-bold text-sm m-5 mt-20 ml-auto max-h-10'
                        />
                    </motion.div>
                    <CartLink/>
                    <motion.div
                        {...slideAnimation('right')}
                        {...fadeAnimation}
                        className={'grid grid-cols-2 mx-20 my-20'}
                    >
                        <div className={'col-span-2 '}>

                        </div>
                        <div className={'col-span-2'}>
                            <FilterSearchInput customStyles='m-auto my-1' onSearch={fetchProductsFilterName}/>
                        </div>
                        {/*</motion.div>*/}
                        <div className={'col-span-2'}>
                            <Sorter/>
                        </div>

                    </motion.div>

                    <motion.div
                        {...slideAnimation('right')}
                        {...fadeAnimation}
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto my-8 md:my-12 px-4 md:px-12'
                    >

                        {products.data && !loading && products.data.map((product) => (
                            <div key={product._id}>
                                <ProductCard product={product}></ProductCard>
                            </div>

                        ))}

                    </motion.div>

                    <motion.div className='flex justify-center my-6'>
                        <PaginationButtons/>
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    )
}
