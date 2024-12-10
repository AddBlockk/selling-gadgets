"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutQuality() {
  const variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
    initialMain: {
      opacity: 0.5,
      rotate: -25,
    },
    visibleMain: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  let whileIn: HTMLBodyElement | undefined = undefined;

  if (typeof window !== "undefined") {
    whileIn =
      document !== null ? document.getElementsByTagName("body")[0] : undefined;
  }

  return (
    <motion.section
      variants={variants}
      initial={
        whileIn !== undefined
          ? whileIn.clientWidth > 1000
            ? "initialMain"
            : ""
          : ""
      }
      viewport={{ once: true }}
      whileInView={
        whileIn !== undefined
          ? whileIn.clientWidth > 1000
            ? "visibleMain"
            : ""
          : ""
      }
      className="lg:grid-cols-3 shadow-md  grid gap-7 bg-[#E2F4FF] sm:py-[44px] max-sm:p-2 sm:px-[120px] rounded-2xl my-[75px]"
    >
      <motion.div
        initial="initial"
        animate="visible"
        variants={variants}
        viewport={{ once: true }}
        className="flex gap-3 justify-center"
      >
        <Image src="/images/box-tick.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62]">
          <h1 className="font-bold">Free delivery</h1>
          <p>on order above $50,00</p>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={variants}
        viewport={{ once: true }}
        className="flex gap-3 justify-center"
      >
        <Image src="/images/crown.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62] ">
          <h1 className="font-bold">Best quality</h1>
          <p>best quality in low price</p>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="text-[#003F62] flex gap-3 justify-center"
      >
        <Image
          src="/images/shield-security.png"
          width={50}
          height={50}
          alt="icon"
        />

        <div className="text-[#003F62]">
          <h1 className=" font-bold">1 year warranty</h1>
          <p>Avaliable warranty</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
