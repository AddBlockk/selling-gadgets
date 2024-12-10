import React, { useEffect, useState } from "react";
import Image from "next/image";
import ApiElectronics from "@/api/apiElectronics.json";
import { IApi, IPropsProduct } from "@/interfaces";
import Link from "next/link";
import { motion } from "framer-motion";



export default function RelatedProduct({ currentIndex }: IPropsProduct) {
  let listApi: IApi[] = ApiElectronics;
  let [listNumber, setListNumber] = useState<number[]>([]);


  useEffect(() => {
    let tempList: number[] = [];

    for (let i = 0; i < 3; i++) {
      let tempNumber = Math.floor(Math.random() * listApi.length);

      while (
        tempNumber === currentIndex ||
        tempList.find((element) => element === tempNumber)
      ) {
        tempNumber = Math.floor(Math.random() * listApi.length);
      }

      if (
        tempNumber !== currentIndex &&
        !tempList.find((element) => element === tempNumber)
      ) {
        tempList.push(tempNumber);
      }
    }

    setListNumber(tempList);
  }, []);

  // console.log(currentIndex);
  // console.log(listNumber);
  return (
    <section className="max-sm: max-md:items-center max-md:justify-center flex flex-wrap gap-4  p-5">
      {listNumber.map((currentNumber, index) => {
        return (
          <Link
            href={`products/${listApi[currentNumber].id}`}
            key={index}
          >
            <div className="max-sm:w-[300px] w-[350px] flex flex-col relative gap-5 border rounded-xl p-4">
              {/* <motion.img
                  className="w-[32px] h-[32px] ml-auto border-[#313131] border-2 p-1 rounded-md hover:bg-gray-300"
                  width={32}
                  height={32}
                  src="/images/heart.png"
                  alt="heart-icon"
                /> */}
              <div className="flex justify-center relative">
                <img
                  className="object-scale-down h-[200px]"
                  src={listApi[currentNumber].url[0]}
                  alt="popular-item"
                />
              </div>

              <div className="flex h-[120px] flex-col gap-4">
                <p className="text-[#1B5A7D] font-semibold">
                  {listApi[currentNumber].title}
                </p>
                <p className="font-bold text-[22px] mt-auto">
                  {listApi[currentNumber].price}₽
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
