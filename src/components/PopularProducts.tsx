"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import SaleUP from "@/components/SaleUP";
import AboutQuality from "@/components/AboutQuality";
import Comments from "@/components/Comments";
import Sponsers from "@/components/Sponsers";
import Link from "next/link";
import apiElectronics from "../api/apiElectronics.json";
import { motion, useAnimate } from "framer-motion";
import CartComponent from "./CartComponent";
import ElementBuy from "./ElementBuy";
import { IApi, IPopularProductsImage } from "@/interfaces";
import PopularProductsImages from "./PopularProductsImages";

type TNamesLi = {
  Cameras: string;
  Laptops: string;
  Smartphones: string;
  TV: string;
  All: string;
};

const NamesLi: TNamesLi = {
  Cameras: "cameras",
  Laptops: "laptops",
  Smartphones: "smartphones",
  TV: "tvs",
  All: "all",
};

export default function PopularProducts() {
  const [images, setImages] = useState<IApi[]>([]);
  const [product, setProducts] = useState<IApi>();
  const [showElement, setShowElement] = useState(false);
  const [listElementsBuy, setListElementsBuy] = useState<React.JSX.Element[]>(
    []
  );
  const [currentKey, setCurrentKey] = useState<number>(0);
  const [showCart, setShowCart] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [listCategory, setListCategory] = useState([
    NamesLi.Cameras,
    NamesLi.Laptops,
    NamesLi.Smartphones,
    NamesLi.TV,
    NamesLi.All,
  ]);
  const [selectedCategory, setSelectedCategory] = useState(4);

  useEffect(() => {
    const tempApi = apiElectronics;

    let tempArrUrl: IApi[] = [];

    tempApi.map((value) => {
      tempArrUrl.push(value);
    });

    setImages(tempArrUrl);
  }, []);

  const handleClick = (element: string, index: number) => {
    setSelectedCategory(index);
    setCurrentCategory(element);
  };

  const handleClickBuy = async (newProduct: IApi) => {
    setProducts(newProduct);
  };

  const imagesPopularProducts: IPopularProductsImage = {
    images: images,
    currentCategory: currentCategory,
    handleClickBuy: handleClickBuy,
    currentKey: currentKey,
    listElementsBuy: listElementsBuy,
    setCurrentKey: setCurrentKey,
    setListElementsBuy: setListElementsBuy,
    setShowCart: setShowCart,
    setShowElement: setShowElement,
  };

  useEffect(() => {
    setProducts(undefined);
  }, [product]);

  return (
    <section className="max-w-[1300px] m-auto">
      {listElementsBuy.map((value) => {
        return value;
      })}
      <div className="flex justify-between mb-[53px]">
        <h1 className="text-[24px] font-bold text-[#1B5A7D]">
          Popular products
        </h1>

        <div>
          <ul className="flex gap-3 flex-wrap">
            {listCategory.map((value, index) => {
              let styleBorder = "";
              if (index === selectedCategory) styleBorder = "border-[#1B5A7D]";
              return (
                <li
                  key={index}
                  onClick={() => handleClick(value, index)}
                  className={`cursor-pointer rounded-2xl py-[7px] px-[20px] text-[#1B5A7D] border ${styleBorder}`}
                >
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <motion.section className="max-sm:grid-cols-1 max-lg:grid-cols-2 grid lg:grid-cols-4 gap-6">
        <PopularProductsImages {...imagesPopularProducts} />
        {/* here */}
      </motion.section>
      <CartComponent
        newProduct={product}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <SaleUP />
      <AboutQuality />
      <Comments />
      <Sponsers />
    </section>
  );
}
