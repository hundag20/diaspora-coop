import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// type Props = {}

const AnimatedShake = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await controls.start({ scale: 1.1, transition: { duration: 0.1 } }); // Zoom in
        await controls.start({ rotate: -5, transition: { duration: 0.1 } }); // Tilt left
        await controls.start({ rotate: 5, transition: { duration: 0.1 } }); // Tilt right
        await controls.start({ rotate: -5, transition: { duration: 0.1 } }); // Tilt left
        await controls.start({ rotate: 5, transition: { duration: 0.1 } }); // Tilt right
        await controls.start({ scale: 1, transition: { duration: 0.1 } }); // Zoom out
        await controls.start({ rotate: 0, transition: { duration: 0.1 } }); // Back to center
      };

      sequence();
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ scale: 1, rotate: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimatedShake;
