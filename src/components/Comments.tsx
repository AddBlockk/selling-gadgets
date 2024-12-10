import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Comments() {
  const imagesURL = [
    "/images/UserComment-1.png",
    "/images/UserComment-2.png",
    "/images/UserComment-3.png",
  ];

  const variants = {
    initial: {
      opacity: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      transition: { duration: 2 + (index + 1) * 0.6 },
    }),
  };

  return (
    <section className="max-w-[1300px]">
      <div className="grid lg:grid-cols-3  max-lg:grid-cols-[300px] max-lg:justify-center  gap-2 text-[#003F62]">
        {imagesURL.map((value, index) => {
          return (
            <motion.div
              custom={index}
              key={index}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              className="flex shadow-md flex-col gap-5 border p-4 border-[#cfcfcf] rounded-2xl"
            >
              <div className="flex gap-5 items-center">
                <img src={value} alt="icon" />
                <h1>Savannah Nguyen</h1>
              </div>

              <p className="bg-[#E2F4FF] py-2 px-6 rounded-2xl">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </motion.div>
          );
        })}
      </div>
      {/* <div className="flex gap-2 justify-center my-[50px]">
        <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-md block"></span>
        <span className="w-[15px] h-[15px]  border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
      </div> */}
    </section>
  );
}
