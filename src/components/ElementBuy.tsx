"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IPos } from "@/interfaces";

export default function ElementBuy({
  posX,
  posY,
  indexElement,
}: IPos): React.JSX.Element {
  return (
    <AnimatePresence key={indexElement}>
      <motion.img
        src="/images/cart-buy.png"
        style={{ top: posY, left: posX }}
        initial={{ opacity: 1 }}
        animate={{ x: 300, y: -200, opacity: 0, zIndex: -1 }}
        transition={{ duration: 5 }}
        className={`absolute w-[35px] left-[${posX}] top-[${posY}]  h-[35px] object-contain`}
      ></motion.img>
    </AnimatePresence>
  );
}
