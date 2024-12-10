import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useVelocity,
  useScroll,
  useSpring,
  useAnimationFrame,
  useAnimate,
  wrap,
  stagger,
} from "framer-motion";
import apiElectronics from "../api/apiElectronics.json";
import { IApi } from "@/interfaces";

export default function Slider() {
  const [images, setImages] = useState<IApi[]>([]);
  const [imageIndex, setImageIndex] = useState(0);
  const baseX = useMotionValue(0);
  // const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    // stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const [scope, animate] = useAnimate();

  const x = useTransform(baseX, (v) => `${wrap(22.5, 5.8, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    // console.log(delta);
    let moveBy = directionFactor.current * 0.5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const tempApi = apiElectronics;

    let tempArrUrl: IApi[] = [];

    for (let i = 0; i < 6; i++) {
      tempApi.map((value) => {
        tempArrUrl.push(value);
      });
    }

    setImages(tempArrUrl);
  }, []);

  // useEffect(() => {
  //   // console.log(x.getPrevious());
  //   const sequence = [
  //     [scope.current, { x: 1400 }],
  //   ];

  //   const enterAnimation = async () => {
  //     let animation = animate(sequence, {
  //       repeat: Infinity,
  //     });

  //     animation.speed = 0.1;
  //   };

  //   enterAnimation();
  //   // setInterval(() => {
  //   //   enterAnimation();
  //   // }, 3000);
  // }, []);

  return (
    <div className=" shadow-md mb-5 max-xl:w-full m-auto justify-center overflow-hidden">
      <motion.div className="flex gap-4 py-5 w-full justify-center">
        <motion.div
          style={{ x }}
          transition={{}}
          ref={scope}
          className="flex shrink-0 gap-4"
        >
          {images.map((value, index) => {
            return (
              <Link href={`products/${value.id}`} key={index}>
                <img className="block h-[150px]" src={value.url[0]} alt="" />
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
