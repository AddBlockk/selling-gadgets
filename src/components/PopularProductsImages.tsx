import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IPopularProductsImage } from "@/interfaces";
import ElementBuy from "./ElementBuy";

export default function PopularProductsImages(props: IPopularProductsImage) {
  const variants = {
    initial: { opacity: 0, scale: 0.5 },

    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 + (index + 1) * 0.3 },
    }),
  };

  function onTap(event: PointerEvent, info: any) {
    props.setShowCart(true);

    let list = props.listElementsBuy;

    let el = props.listElementsBuy[0];

    if (el !== undefined) el.props.children.props.animate.opacity;

    let cart = document.querySelector(".cart");

    if (cart !== null) {
      let posElement: HTMLElement = event.target as HTMLElement;

      let posY = String(posElement.offsetTop) + "px";
      let posX = String(posElement.offsetLeft) + "px";

      let indexElement = props.currentKey;

      list.push(ElementBuy({ posX, posY, indexElement }));

      props.setCurrentKey((value) => value + 1);

      props.setListElementsBuy(list);

      if (props.listElementsBuy.length > 10) {
        props.listElementsBuy.splice(0, 1);

        props.setListElementsBuy(props.listElementsBuy);
      }
    }

    props.setShowElement(true);
  }

  return (
    props.images &&
    props.images.map((value, index) => {
      if (
        value.category === props.currentCategory ||
        props.currentCategory === "all"
      ) {
        return (
          <motion.div
            custom={value.id}
            initial="initial"
            variants={variants}
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className="shadow-md flex flex-col border rounded-xl p-4"
          >
            <div className="flex justify-end gap-2">
              <button onClick={() => props.handleClickBuy(value)}>
                <motion.img
                  onTap={onTap}
                  className="w-[32px] h-[32px] border-[#313131] border-2 p-1 rounded-md hover:bg-gray-300"
                  width={32}
                  height={32}
                  src="/images/shopping-cart.png"
                  alt="buy-icon"
                />
              </button>
            </div>
            <Link href={`products/${value.id}`}>
              <div className="flex justify-center relative">
                <Image
                  className="object-contain w-[235px] h-[200px] mb-3"
                  src={value.url[0]}
                  width={180}
                  height={180}
                  alt="popular-item"
                />
              </div>
            </Link>

            <div className="flex flex-col gap-1">
              <p className="min-h-[70px] text-[#1B5A7D] font-semibold">
                {value.title}
              </p>
              <p className="font-bold text-[20px] ">
                <span className="text-orange-600">{value.price}</span>₽
              </p>
            </div>
          </motion.div>
        );
      }
    })
  );
}
