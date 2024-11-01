'use client';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
 interface TitleAnimateProps {
     children: ReactNode;
 }

export default function TitleAnimate({children} :TitleAnimateProps){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return(
        <motion.div
        ref={ref}
        initial={{  opacity:0, y: -10}}
        animate={isInView ?{  opacity: 1, y:0 } :{}}
        transition={{ ease:'easeInOut', duration: 2 }}>
      {children}
        </motion.div>
    )
}