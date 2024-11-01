import {motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react';
interface ContentProps{
    children: ReactNode,
}

export default function Content({children}:ContentProps){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    return(
        <motion.div
        ref={ref}
        initial={{opacity:0, y:20  }}
        animate={isInView ? {opacity: 1, y:0} : {}}
        transition={{ ease:'easeOut', duration:0.9 }}>

            {children}

        </motion.div>

    );
};