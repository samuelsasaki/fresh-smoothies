import React, { useEffect, useRef} from 'react'; 
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
} 

export const RevealDownThree = ({ children, width = "fit-content" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else if (!isInView) {
      mainControls.start("hidden");
    }
  }  , [isInView, mainControls]);


  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.35,
        type: "spring",
      },
    },
  }

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.div>

    </div>
  );
}
