import React from "react";
import Link from "next/link";
import { IButtonsProduct, IApi } from "@/interfaces";

export default function ButtonsProduct({
  data,
  setProducts,
  setNewPrice,
  setShowCart,
}: IButtonsProduct) {
  const handleClickBuy = () => {
    let actualPriceProduct = document.querySelector(".price")?.innerHTML;
    let currentGigabyte = document.querySelector(".gigabyte")?.innerHTML;

    if (Number(actualPriceProduct) > data.price) {
      let productTitle = data.title + " " + ` GB: ${currentGigabyte}`;

      let tempData: IApi = {
        id: data.id,
        category: data.category,
        color: data.color,
        description: data.description,
        price: Number(actualPriceProduct),
        star: data.star,
        title: productTitle,
        url: data.url,
        gigabytes: data.gigabytes,
      };
      setProducts(tempData);
      setNewPrice(undefined);
    } else setProducts(data);
    setShowCart(true);
  };

  const handleBuyNow = () => {
    let actualPriceProduct = document.querySelector(".price")?.innerHTML;
    let currentGigabyte = document.querySelector(".gigabyte")?.innerHTML;

    if (Number(actualPriceProduct) > data.price) {
      let productTitle = data.title + " " + ` GB: ${currentGigabyte}`;

      let tempData: IApi = {
        id: data.id,
        category: data.category,
        color: data.color,
        description: data.description,
        price: Number(actualPriceProduct),
        star: data.star,
        title: productTitle,
        url: data.url,
        gigabytes: data.gigabytes,
      };

      setProducts(tempData);
      setNewPrice(undefined);
    } else setProducts(data);
    setShowCart(true);
  };

  return (
    <div className="flex gap-5 items-center ">
      <button
        onClick={() => handleClickBuy()}
        className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black"
      >
        Add to cart
      </button>
      <Link href="/products/cart">
        <button
          onClick={() => handleBuyNow()}
          className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black"
        >
          Buy it now
        </button>
      </Link>
    </div>
  );
}
