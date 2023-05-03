import {useSnapshot} from 'valtio'
import dataState from '@component/store/Store'
import {motion} from 'framer-motion'
import {fadeAnimation, slideAnimation} from '@component/utils/motion'
import LinkToBackPage from '@component/components/LinkToBackPage'

export default function ProductDetails() {

    const {productToDetail} = useSnapshot(dataState)

    if (!productToDetail) {
        return <div>Loading...</div>
    }

    return (
        <motion.div
            {...slideAnimation('right')}
            {...fadeAnimation}
        >
            <div className={'h-screen grid grid-cols-1 place-content-around'}>
                <LinkToBackPage/>
                <div className='flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden m-10'>
                    <div className='w-full md:w-1/3'>
                        <div className='relative h-48 md:h-full'>
                            <img src={productToDetail.imageUrl} alt={'Image details'}/>
                        </div>
                    </div>
                    <div className='flex flex-col p-4 md:p-6 w-full md:w-2/3'>
                        <h2 className='text-xl font-bold mb-2'>{productToDetail.productName}</h2>
                        <p className='text-gray-700 text-base mb-4'>{productToDetail.description}</p>
                        <div className='flex items-center mb-4'>
                            <span className='text-gray-600 font-medium mr-2'>
                                Location:
                            </span>
                            <span
                                className='text-gray-800'>{productToDetail.location.city}, {productToDetail.location.country}</span>
                        </div>
                        <div className='flex items-center mb-4'>
                              <span className='text-gray-600 font-medium mr-2'>
                                Provider:
                              </span>
                            <span className='text-gray-800'>{productToDetail.provider.name}</span>
                        </div>
                        <div className='flex items-center mb-4'>
                              <span className='text-gray-600 font-medium mr-2'>
                                Rates:
                              </span>
                            <div className='flex flex-col'>
                                {Object.entries(productToDetail.rates).map(([key, value]) => (
                                    <div key={key} className='flex items-center'>
                                        <span className='text-gray-800'>{key}:</span>
                                        <span className='text-gray-600 ml-2'>{value.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

    