"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeaderMainInfo from "@/components/HeaderMainInfo";
import Slider from "@/components/Slider";
import Link from "next/link";
import { easeOut, motion, useScroll } from "framer-motion";

export default function Header() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/" &&
        window.location.pathname !== undefined &&
        currentUrl !== window.location.pathname
      ) {
        // console.log(window.location.pathname);
        setCurrentUrl(window.location.pathname);
      }
    }
  }, [currentUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setChecked(true);
    setModal(true);
  };

  const handleClickModal = () => {
    setChecked(false);
    setModal(false);
  };

  const variants = {
    open: { opacity: 1, x: 0, y: 0, display: "block" },
    closed: { opacity: 0, x: "-100%", y: "-100%" },
  };

  return (
    <>
      {
        <motion.div
          layout
          className=" background-modal z-20 relative"
          initial={{ opacity: 0, display: "none" }}
          animate={modal ? "open" : "closed"}
          transition={{
            opacity: { ease: "easeOut" },
            layout: { duration: 0.3 },
          }}
          variants={variants}
        >
          <div className="modal flex flex-col items-center">
            <Link onClick={handleClickModal} href="/">
              Home
            </Link>
            <Link onClick={handleClickModal} href="/products">
              Products
            </Link>
            <Link onClick={handleClickModal} href="/products/cart">
              Cart
            </Link>
            <Link onClick={handleClickModal} href="/products/signIn">
              Login
            </Link>
          </div>
        </motion.div>
      }
      <motion.div
        // style={{ translateY: scrollY }}
        className="wrapper-header max-sm:px-2 left-0 w-full z-10 fixed m-auto top-0 m flex justify-around py-1 bg-white/30 backdrop-blur items-center"
      >
        <div className="w-[200px] flex items-center gap-8">
          <input
            id="menu__toggle"
            className="opacity-0"
            onChange={(e) => handleChange(e)}
            type="checkbox"
            checked={checked}
          />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <h1>MENU</h1>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/images/icon-company1.png"
              width={70}
              height={70}
              alt="icon"
            />
          </Link>
        </div>
        <div className="w-[200px] flex items-center justify-end gap-8">
          <Link href="/products/cart">
            <Image
              className="cursor-pointer"
              width={25}
              height={25}
              src="/images/shopping-cart.png"
              alt="icon-shop"
            />
          </Link>
        </div>
      </motion.div>
      <div className="max-w-[1300px] mt-[100px] m-auto">
        {currentUrl !== "" && (
          <div className="py-[15px] mb-[15px]">
            <p>{`Home > ${currentUrl.split("/")[1]} ${
              currentUrl.split("/").length > 2
                ? `> ${currentUrl.split("/")[2]}`
                : ""
            } `}</p>
          </div>
        )}
      </div>

      {currentUrl === "" && <HeaderMainInfo />}
      {currentUrl === "" && <Slider />}
    </>
  );
}
