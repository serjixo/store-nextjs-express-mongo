import {useSnapshot} from 'valtio'
import dataState from '../store/Store'
import handleNewCartCreation, {updateCart} from '@component/pages/api/Cart'

export default function AddToCartButton({productId}) {
    const dataStateSnap = useSnapshot(dataState)

    const handleAddToCart = async (e, productId) => {
        if (!dataStateSnap.cartId) {
            await handleNewCartCreation(productId)
        } else {
            await updateCart(dataStateSnap.cartId, productId)
        }
    }

    return (
        <button
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            onClick={(e) => handleAddToCart(e, productId)}
        >
            Add to cart
        </button>
    )
}
