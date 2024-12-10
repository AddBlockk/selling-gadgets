import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import PopularProducts from "@/components/PopularProducts";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";
import CartComponent from "@/components/CartComponent";
import { Container } from "@mui/material";

export default function home() {
  return (
    <>
      <Container className="bg-[white]">
        <Header />
        <PopularProducts />
        <LatestNews />
      </Container>
      <Footer />
    </>
  );
}
