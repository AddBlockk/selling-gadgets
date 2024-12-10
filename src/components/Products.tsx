"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ICategories,
  ILastELement,
  IApi,
  ICheckboxCategories,
} from "@/interfaces";
import CheckboxCategories from "./CheckboxCategories";
import { handleChangeCategories } from "./CheckboxCategories";
import ProductsOnScreen from "./ProductsOnScreen";

export default function Products() {
  const [listCategories, setListCategories] = useState<ICategories[]>([
    {
      name: "All categories",
      checked: false,
    },
    {
      name: "Smartphones",
      checked: false,
    },
    {
      name: "Laptops",
      checked: false,
    },
    {
      name: "TVs",
      checked: false,
    },
  ]);

  const [lastChangeElement, setLastChangeElement] = useState<ILastELement>();
  const [rangeValue, setRangeValue] = useState<string>("25000");
  const [productsOnScreen, setProductsOnScreen] = useState<IApi[]>([]);
  const [firstElement, setFirstElement] = useState<HTMLInputElement>();

  let ref = useRef(null);
  let tempCategories: ICheckboxCategories = {
    listCategories: listCategories,
    productsOnScreen: productsOnScreen,
    rangeValue: rangeValue,
    setLastChangeElement: setLastChangeElement,
    setProductsOnScreen: setProductsOnScreen,
  };

  useEffect(() => {
    if (firstElement !== undefined) {
      handleChangeCategories(
        firstElement,
        "All categories",
        tempCategories,
        Number(rangeValue),
        true
      );
    }
  }, [firstElement]);

  const handleRange = (element: React.ChangeEvent<HTMLInputElement>) => {
    let tempValue = Number(element.target.value) * 500;

    if (lastChangeElement !== undefined)
      handleChangeCategories(
        lastChangeElement.element,
        lastChangeElement.nameElement,
        tempCategories,
        tempValue
      );

    setRangeValue(tempValue.toString());
  };

  useEffect(() => {
    let list = document.querySelector(".list-categories");

    if (list !== null)
      setFirstElement(list.children[0].getElementsByTagName("input")[0]);
  }, [ref]);

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="max-sm:flex-col  max-sm:justify-center flex gap-2">
        <section className="max-sm:m-auto max-sm:px-2 leftProducts w-[320px] ">
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between pb-3">
              <h1 className="text-[#316887] font-semibold">Categories</h1>
              <h1 className="cursor-pointer text-[#888585]">Reset</h1>
            </div>
            <ul className="list-categories flex flex-col gap-1">
              <CheckboxCategories
                listCategories={listCategories}
                productsOnScreen={productsOnScreen}
                rangeValue={rangeValue}
                setLastChangeElement={setLastChangeElement}
                setProductsOnScreen={setProductsOnScreen}
              />
            </ul>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between pb-3">
              <h1 className="text-[#316887] font-semibold">Price</h1>
              <h1 className="cursor-pointer text-[#888585]">Reset</h1>
            </div>
            <ul className="flex gap-1">
              <p>0</p>
              <input
                className="w-full"
                type="range"
                name="range"
                id="range"
                min="0"
                max="100"
                step="10"
                onChange={(e) => handleRange(e)}
              />
              <p>{">"}50000₽</p>
            </ul>
            <p>0 - {rangeValue === "50000" ? ">50000" : rangeValue} ₽</p>
          </div>
        </section>
        <section className="justify-center right-products grid gap-3 w-[100%] grid-rows-[350px] pb-5">
          <ProductsOnScreen {...productsOnScreen}/>
        </section>
      </div>
    </div>
  );
}
