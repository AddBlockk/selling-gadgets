import React, { useEffect, useState } from "react";
import Image from "next/image";
import apiElectronics from "../api/apiElectronics.json";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeaderMainInfo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let num = 0;
    setPercent(0);

    setInterval(() => {
      // console.log(num);

      setPercent(-20);

      if (num !== 2) {
        setCurrentImage((value) => value + 1);
        num++;
      } else {
        setCurrentImage(0);
        num = 0;
      }
    }, 6000);

    setInterval(() => {
      setPercent((value) => (value === 100 ? 0 : value + 20));
    }, 1000);
  }, []);

  const variants = {
    initial: {
      rotateX: 10,
    },

    visible: {
      rotateX: 25,
      transition: { duration: 4 },
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="visible"
      className="max-w-[1300px] m-auto border shadow-xl p-4 overflow-hidden h-[400px] ease-out"
    >
      {apiElectronics.map((product, index) => {
        if (index === currentImage) {
          return (
            <motion.section
              className="flex max-lg:flex-col max-lg:gap-3 items-center justify-around"
              key={index}
            >
              <div className="w-[300px] ease-out">
                <h1 className="max-lg:text-[18px] lg:text-[22px]">
                  {product.title}
                </h1>
              </div>
              <div
                className="flex  items-center gap-3 ease-out"
                key={product.id}
              >
                <Link href={`products/${product.id}`}>
                  <div className="flex flex-col gap-6 items-center">
                    <img
                      className="max-sm:w-[50%] max-sm:h-[50%] sm:w-[350px] object-scale-down sm:h-[250px] ease-out"
                      src={product.url[0]}
                      alt={product.title}
                    />

                    <div className="flex items-center gap-2">
                      <progress
                        className="h-[4px]"
                        max={100}
                        value={percent}
                      ></progress>
                      <span>{index + 1} / 3</span>
                    </div>
                  </div>
                </Link>
              </div>
              <h1 className="max-sm:text-[22px] max-lg:w-auto lg:w-[300px] max-lg:text-[26px]  lg:text-[30px]">
                Цена:{" "}
                <span className="font-semibold text-orange-400 ease-out">
                  {product.price}
                </span>
                ₽
              </h1>
            </motion.section>
          );
        }
      })}
    </motion.section>
  );
}
