"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RelatedProduct from "@/components/RelatedProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import apiElectronics from "@/api/apiElectronics.json";
import { IApi } from "@/interfaces";
import Link from "next/link";
import CartComponent from "@/components/CartComponent";
import { Box, Card } from "@mui/material";
import ProductImages from "@/components/ProductImages";
import TitleProduct from "@/components/TitleProduct";
import Gigabytes from "@/components/Gigabytes";
import ButtonsProduct from "@/components/ButtonsProduct";

export default function Product({ params }: { params: { id: string } }) {
  const [data, setData] = useState<IApi>();
  const [product, setProducts] = useState<IApi>();
  const [currentGigabyte, setCurrentGigabute] = useState(0);
  const [indexButton, setIndexButton] = useState(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [newPrice, setNewPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleGetData = async () => {
      let apiData: IApi = await getData(params.id);

      setData(apiData);
    };

    handleGetData();
  }, []);

  const handleChangeColor = () => {};

  useEffect(() => {
    setProducts(undefined);
  }, [product]);

  const handleChangeGigabytes = (index: number) => {
    setIndexButton(index);
    setCurrentGigabute(index !== 0 ? 0.5 + (index + 1) * 0.5 : 1);
  };

  useEffect(() => {}, [newPrice]);

  if (data !== undefined) {
    let description = data.description.split(";");

    return (
      <>
        <Box className="max-w-[1300px] bg-white rounded-md px-2 m-auto mt-[100px]">
          <Header />
          <section className="max-md:flex-col max-md:justify-center p-5 flex gap-10 mb-5">
            <ProductImages data={data} />
            <div className="max-md:w-[100%] w-[40%]  shadow-lg p-4">
              <TitleProduct data={data} currentGigabyte={currentGigabyte} />
              <div className="flex flex-col gap-8 border-b-2 border-[#BDBDBD] pb-4 mb-4">
                {data.gigabytes && (
                  <Gigabytes
                    data={data}
                    handleChangeGigabytes={handleChangeGigabytes}
                    indexButton={indexButton}
                  />
                )}
                <div className="flex flex-col gap-4">
                  {description.map((value, index) => {
                    return <p key={index}>{value}</p>;
                  })}
                </div>
              </div>
              <ButtonsProduct
                data={data}
                setNewPrice={setNewPrice}
                setProducts={setProducts}
                setShowCart={setShowCart}
              />
            </div>
          </section>

          <RelatedProduct currentIndex={data.id - 1} />

          <CartComponent
            newProduct={product}
            showCart={showCart}
            setShowCart={setShowCart}
          />
        </Box>
        <Footer />
      </>
    );
  }
}

async function getData(currentId: string) {
  const res = await apiElectronics.filter((value) => {
    if (value.id === Number(currentId)) return value;
  });

  return res[0];
}
