import { motion } from "framer-motion"
import {useDisplay} from "../../store/display"

export default function How():React.JSX.Element {
    const arrow = {
        initial: {
            opacity: 0,
            x: -10,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.15,
                duration: 0.2,
            },
        },
        exit: {
            opacity:0
        }
    };

    const setPage = useDisplay((state:any) => state.setPage)

    return(
        <>
            <motion.div onClick={() => setPage(2)} initial="initial" whileHover="animate" className="h-[30.27vh] select-none font-[Inter] text-[118px] font-light text-black cursor-pointer hover:bg-black hover:text-white transition duration-150">
                <motion.div className="flex">
                    <motion.h1 initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:0.8, delay:0.1, ease:"easeInOut"}} className="mx-8 py-2">Comment</motion.h1>
                    <motion.svg variants={arrow} className="my-auto pt-4" width="36" height="58" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0008 22.5C24.0678 22.4996 22.5004 24.0662 22.5 25.9992C22.4996 27.9322 24.0662 29.4996 25.9992 29.5L26.0008 22.5ZM28.4743 28.4754C29.8415 27.1089 29.842 24.8928 28.4754 23.5257L6.20659 1.2468C4.84007 -0.12034 2.62399 -0.12084 1.25685 1.24569C-0.110297 2.61221 -0.110797 4.82829 1.25573 6.19543L21.0503 25.9989L1.2468 45.7934C-0.12034 47.1599 -0.12084 49.376 1.24569 50.7432C2.61221 52.1103 4.82829 52.1108 6.19543 50.7443L28.4743 28.4754ZM25.9992 29.5L25.9992 29.5L26.0008 22.5L26.0008 22.5L25.9992 29.5Z" fill="white"/>
                    </motion.svg>
                </motion.div>
            </motion.div>
        </>
    )
}