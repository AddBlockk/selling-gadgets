"use client";

import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IApi, IProps } from "@/interfaces";

export default function CartComponent({
  newProduct,
  showCart,
  setShowCart,
}: IProps) {
  const [localProducts, setLocalProducts] = useState<IApi[]>([]);
  const [products, setProducts] = useState<IApi[]>([]);
  const [mainTimer, setMainTimer] = useState<number>(0);
  const [timer, setTimer] = useState<number[]>();
  // debugger

  useEffect(() => {
    // console.log("Беру данные");
    let tempLocal = localStorage.getItem("products");
    tempLocal !== null ? setLocalProducts(JSON.parse(tempLocal)) : "";
    // setLocalProducts(tempLocal !== null ? tempLocal : "");
  }, [newProduct]);

  useEffect(() => {
    if (localProducts !== null) {
      setProducts(localProducts);
    }
  }, [localProducts]);

  useEffect(() => {
    // setShowCart(true);
    // console.log(products);

    if (products.length > 0) {
      // mb error

      let list: number[] = timer !== undefined ? timer : [];

      let temp = window.setTimeout(() => {
        setShowCart(false);
        setMainTimer(0);
      }, 3000);

      list.push(temp);

      setTimer(list);

      if (mainTimer !== undefined && timer !== undefined) {
        window.clearTimeout(timer[timer.length - 2]);
        setMainTimer(temp);
      }
    }
  }, [products]);

  useEffect(() => {
    let tempArrProducts: IApi[] = [...products];

    if (products !== null && newProduct !== undefined) {
      // console.log(products);
      // console.log(newProduct);
      // console.log(tempArrProducts);

      tempArrProducts.push(newProduct);

      setProducts(tempArrProducts);

      localStorage.setItem("products", JSON.stringify(tempArrProducts));
    }
  }, [newProduct]);

  // console.log(products);
  // console.log(localProducts);

  return (
    <>
      {(products.length > 0 || newProduct !== undefined) && showCart && (
        <motion.div className="cart fixed top-[100px] right-3 rounded-md  w-[300px] h-[400px] overflow-y-scroll z-[1]">
          {products &&
            products.map((value, index) => {
              return (
                <Link key={index} href={`products/${value.id}`}>
                  <div className="flex items-center gap-3 px-4 py-2 bg-[#ffffff] justify-between">
                    <img
                      className="w-[40px] h-[40px]  object-contain"
                      src={value.url[0]}
                      alt=""
                    />
                    <p className="text-[14px]">{value.title}</p>
                    <h2>{value.price}</h2>
                  </div>
                </Link>
              );
            })}
        </motion.div>
      )}
    </>
  );
}
