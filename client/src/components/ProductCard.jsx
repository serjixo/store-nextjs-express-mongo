import {motion} from "framer-motion";

export default function ProductCard({product}) {
    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.03,
                    transition: {duration: 0.5},
                }}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg
            bg-gradient-to-r from-indigo-500 hover:from-cyan-500  hover:to-blue-500
             "
            key={product._id}>
                <div className="h-64 relative">
                    <img className="w-full h-full absolute top-0 left-0 object-cover object-center"
                         src={product.imageUrl} alt="product image"/>
                </div>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2 text-white">{product.productName}</div>
                    <div className={'relative h-40'}>
                        <div className={'absolute top-0 left-0'}>
                            <p className="text-white text-base ">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                    <button
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add
                        to cart
                    </button>
                </div>
            </motion.div>
        </>
    )
}

