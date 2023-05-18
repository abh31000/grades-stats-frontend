import { motion } from "framer-motion"

export default function Title():React.JSX.Element {
    const marqueeVariants = {
        animate: {
            x: [20, -2210],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 19,
                    delay: 0.35,
                    ease: "linear",
                },
            },
        },
    };

    return(
        <>
            <div className="font-[Inter] select-none transition duration-150 border-black border-b-[3px] hover:bg-black hover:text-white relative w-[100vw] max-w-full h-[30vh] overflow-x-hidden text-black text-[118px] tracking-tigh leading-none">
                <motion.div variants={marqueeVariants} animate="animate" className="font-light absolute whitespace-nowrap">
                    <h1 className="mx-6 my-8">Moyennes Université - Statistiques et Visualisation des données</h1>
                </motion.div>
            </div>
        </>
    )
}