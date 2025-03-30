"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Right = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });

  return (
    <div ref={ref} className="md:float-right md:w-1/2 md:mx-auto pt-5 md:pt-20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bg-sky-200 md:rounded-3xl"
        style={{
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          zIndex: -1,
          width: "60%",
          height: "85%",
          right: "7%",
          top: "10%",
        }}
      ></motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="https://png.pngtree.com/png-vector/20231208/ourmid/pngtree-smiling-woman-with-credit-card-and-laptop-blue-computer-png-image_10979822.png"
        alt="photo"
        className="md:rounded-2xl md:w-2/3 w-3/4 m-auto"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default Right;
