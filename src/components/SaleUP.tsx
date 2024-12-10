import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, MotionValue, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function SaleUP() {
  const variants = {
    initial: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: { duration: 4 },
    },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  // console.log(y);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      initial="initial"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="max-w-[1300px] shadow-xl  m-auto flex bg-[url('/images/bg-sale.png')] bg-cover rounded-3xl max-lg:justify-center max-lg:p-2 lg:justify-end bg-no-repeat my-[50px]"
    >
      <div className="flex flex-col items-center lg:pt-[90px] lg:pb-[60px] my-10 lg:pr-[150px] gap-4">
        {/* <button className="bg-[#d99613] max-lg:p-2 lg:py-[10px] lg:px-[25px] text-white rounded-2xl">
          New laptop
        </button> */}
        <h1 className="lg:text-[50px] max-lg:text-[30px] text-[#2E8FC5] font-bold">
          Sale up to 50% off
        </h1>
        <p className="text-white">12 inch hd display</p>
        {/* <button className="bg-[#d99613] max-lg:p-2 lg:py-[10px] lg:px-[25px] text-white rounded-2xl">
          Shop now
        </button> */}
      </div>
    </motion.section>
  );
}
