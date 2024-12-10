import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sponsers() {
  const imagesURL = [
    "/images/brand-1.png",
    "/images/brand-2.png",
    "/images/brand-3.png",
    "/images/brand-4.png",
    "/images/brand-5.png",
  ];

  const variants = {
    initial: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: { duration: 3 + index * 0.5 },
    }),
  };

  return (
    <motion.section className="max-sm:justify-center flex justify-between max-lg:flex-wrap shadow-md rounded-md max-lg:gap-5 lg:max-w-[1300px] max-xl:w-full bg-[#E2F4FF] py-[40px] px-[30px] items-center my-[50px]">
      {imagesURL.map((value, index) => {
        return (
          <motion.img
            className="max-xl: w-[150px]"
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            src={value}
            alt="sponser-img"
          />
        );
      })}
    </motion.section>
  );
}
