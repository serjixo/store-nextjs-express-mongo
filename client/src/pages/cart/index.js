import {AnimatePresence, motion} from "framer-motion"
import {useSnapshot} from "valtio"
import {fadeAnimation, slideAnimation} from "@component/utils/motion"
import dataState from "@component/store/Store"
import AnimatedText from "@component/components/AnimatedText"
import ProductCard from "@component/components/ProductCard"
import LinkToBackPage from "@component/components/LinkToBackPage"

export default function Products() {

    const {products} = useSnapshot(dataState)
    
    return (
        <AnimatePresence>
            <>

                <motion.div
                    className={'m-20 grid grid-cols-2 '}
                    {...slideAnimation('right')}
                    {...fadeAnimation}
                >
                    <AnimatedText text={'Ready to live.'}/>
                    <LinkToBackPage/>
                </motion.div>


                <motion.div
                    {...slideAnimation('right')}
                    {...fadeAnimation}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto my-8 md:my-12 px-4 md:px-12"
                >

                    {products.data
                        // && !loading
                        && products.data.map((product) => (
                            <div key={product._id}>
                                <ProductCard product={product} isOnCart={true}>

                                </ProductCard>
                            </div>

                        ))}

                </motion.div>


            </>
        </AnimatePresence>
    )
}
