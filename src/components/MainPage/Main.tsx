import About from "./About";
import How from "./How";
import Title from "./Title";
import { motion } from "framer-motion";


export default function MainPage():React.JSX.Element {
    return(
        <>  
            <motion.div initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:0.4 ,ease:"easeInOut"}} className="overflow-hidden"><Title></Title></motion.div>
            <motion.div initial={{x:"-100vw"}} animate={{x:"0"}} transition={{delay:0.1, duration:0.4 ,ease:"easeInOut"}} className="overflow-hidden"><About></About></motion.div>
            <motion.div initial={{x:"-100vw"}} animate={{x:"0"}} transition={{delay:0.2, duration:0.4 ,ease:"easeInOut"}} className="overflow-hidden"><How></How></motion.div>
        </>
    )
}