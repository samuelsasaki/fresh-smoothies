import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
}

export const Nav = ({ children }: RevealProps) => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const unsub = scrollY.on("change", (latest) => console.log(latest)); 

  //   return () => unsub();
  // }, [scrollY]);

  useMotionValueEvent(scrollY,"change", (latest) => {
    if(latest >= 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });


  // const navbarStyle = [{
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   backgroundColor: scrollY.get() > 0 ? "white" : "transparent",
  //   fontSize: scrollY.get() > 0 ? "16px" : "24px",
  //   transition: 'background-color 0.3s, font-size 0.3s',
  //   zIndex: 999,
  // }];

  return (
    <motion.nav
      variants={{
        hidden: { y: 0, scale: 1},
        visible: { y: 0, scale: 1.1},
      }}
      initial="visible"
      animate={scrolled ? "hidden" : "visible"}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999}}
      className={`${scrolled ? "shadow-md bg-white" : "md:shadow-none shadow-md md:bg-transparent bg-white"}`}
      transition={{ duration: 0.3, ease: "easeInOut", type: "spring"}}
    >
      {children}
    </motion.nav>
  );
};
