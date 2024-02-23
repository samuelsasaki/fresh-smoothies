import React, { useEffect, useRef} from 'react'; 
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
  width: "100%";
} 

const variant1 = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15,
      type: "spring",
    },
  },
}

const variant2 = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
      type: "spring",
    },
  },
}

const variant3 = {
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

export const RevealDownOne = ({ children, width = "100%" }: RevealProps) => {
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

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.div
        variants={variant1}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.div>

    </div>
  );
}

export const RevealDownTwo = ({ children, width = "100%" }: RevealProps) => {
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

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.div
        variants={variant2}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.div>

    </div>
  );
}

export const RevealDownThree = ({ children, width = "100%" }: RevealProps) => {
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

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.div
        variants={variant3}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.div>

    </div>
  );
}

export const RevealDownTwoText = ({ children, width = "100%" }: RevealProps) => {
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

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.span
        variants={variant2}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.span>

    </div>
  );
}


export const RevealDownOneText = ({ children, width = "100%" }: RevealProps) => {
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

  return (
    <div 
    ref={ref}
    style={{ position: "relative", width: width, overflow: "hidden"}}>
      <motion.span
        variants={variant1}
        initial="hidden"
        whileInView="visible"
      >
        {children}
      </motion.span>

    </div>
  );
}


