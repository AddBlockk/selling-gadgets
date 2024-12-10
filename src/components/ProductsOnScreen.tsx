import React from "react";
import { IApi } from "@/interfaces";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsOnScreen(productsOnScreen: IApi[]) {
  let newProducts = Object.entries(productsOnScreen);
  return (
    newProducts.length >= 1 &&
    newProducts.map((value, index) => {
      return (
        <Link key={value[1].id} href={`/products/${value[1].id}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 10,
            }}
            className="shadow-md flex flex-col border rounded-xl p-4 pb-8 h-[350px]"
          >
            <div className="h-[220px] flex flex-col justify-center relative">
              <p className="text-right font-bold">{value[1].price} ₽</p>

              <img
                className="mb-4 m-auto object-scale-down w-[200px] h-[180px]"
                src={value[1].url[0]}
                alt="popular-item"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#1B5A7D] font-semibold">{value[1].title}</p>
            </div>
          </motion.div>
        </Link>
      );
    })
  );
}
