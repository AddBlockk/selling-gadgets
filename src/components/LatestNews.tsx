"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LatestNews() {
  const imagesURL = ["/images/Blog-1.png", "/images/Blog-2.png"];

  const variants = {
    initial: (index: number) => ({
      opacity: 0,
      display: index !== 0 ? "hidden" : "block",
    }),

    visible: (index: number) => ({
      opacity: 1,
      display: "block",
      transition: { delay: index * 1.5 },
    }),
  };

  const handleClickShow = () => {};

  return (
    <section className="max-w-[1300px] m-auto">
      <div className="flex justify-between mb-[53px] text-[#1B5A7D]">
        <h1 className="text-[24px] font-bold">Latest news</h1>

        {/* <Link onClick={handleClickShow} href="#">
          <p className="font-semibold">View all</p>
        </Link> */}
      </div>

      <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
        {imagesURL.map((value, index) => {
          return (
            <motion.div
              custom={index}
              variants={variants}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="flex gap-7 items-center border rounded-2xl py-[20px] px-[30px]"
            >
              <Image src={value} width={318} height={288} alt="photo-blog" />

              <div className="text-[#1B5A7D] flex flex-col gap-4">
                <h1>22,oct,2021</h1>

                <h1 className="font-bold text-[23px]">
                  Who avoids a pain that produces?
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                  eaque iure officia magni cumque ratione? Incidunt veritatis
                  dicta, provident
                </p>

                <p>By spacing tech</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
