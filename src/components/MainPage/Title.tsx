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
                    delay: 0.6,
                    ease: "linear",
                },
            },
        },
    };

    return(
        <>
            <div className="font-[Inter] select-none transition duration-150 border-black border-b-[3px] hover:bg-black hover:text-white relative w-[100vw] max-w-full h-[30vh] overflow-x-hidden text-black text-[118px] tracking-tigh leading-none">
                <motion.div variants={marqueeVariants} animate="animate" className="font-light absolute whitespace-nowrap">
                    <motion.h1 initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:0.8, delay:0., ease:"easeInOut"}} className="mx-6 my-8">Moyennes Université - Statistiques et Visualisation des données</motion.h1>
                </motion.div>
            </div>
        </>
    )
}