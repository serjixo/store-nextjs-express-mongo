import {AnimatePresence, motion} from "framer-motion";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "@component/utils/motion.js";
import {useSnapshot} from "valtio";
import dataState from "@component/store/Store";
import CustomButton from "@component/components/CustomButton";

export default function Hero() {
    const snap = useSnapshot(dataState)
    return (
        <>
            <AnimatePresence>
                {snap.intro && (
                    <motion.section className="home" {...slideAnimation('left')}>
                        <motion.div className={"home"} {...slideAnimation('left')}>
                            <motion.header {...slideAnimation('down')}>
                                <img
                                    src={'./triggle.svg'}
                                    alt={'logo'}
                                    className={'w-32 h24 object-contain'}
                                />
                            </motion.header>
                            <motion.div className="home-content" {...headContainerAnimation}>

                                <motion.div {...headTextAnimation}>
                                    <h1 className="head-text">
                                        Fill <br className="xl:block hidden"/> the journey.
                                    </h1>
                                </motion.div>
                                <motion.div
                                    {...headContentAnimation}
                                    className="flex flex-col gap-5"
                                >
                                    <p className="max-w-md font-normal text-white text-base">
                                        Una plataforma todo en uno que te permite gestionar de forma sencilla la
                                        venta de actividades y transfers,
                                        <strong>reduciendo costes y aumentando ingresos.
                                        </strong>
                                    </p>
                                    <CustomButton
                                        type="filled"
                                        title="See products"
                                        handleClick={() => dataState.intro = false}
                                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    )
}
