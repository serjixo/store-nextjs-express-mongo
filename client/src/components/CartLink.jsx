import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping"
import {motion} from 'framer-motion'
import {fadeAnimation, slideAnimation} from "@component/utils/motion";

export default function cartLink() {
    return (
        <motion.div
            {...fadeAnimation}
            {...slideAnimation('right')}>
            <Link href="/cart" className="flex items-center justify-end space-x-2 text-white m-20">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff", maxHeight: '20px'}}/>
                <span>Go to Cart</span>
            </Link>
        </motion.div>
    );
};