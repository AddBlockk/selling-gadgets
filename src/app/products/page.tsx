"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import SaleUP from "@/components/SaleUP";
import { Container } from "@mui/material";

export default function products() {
  return (
    <>
      <Container className="bg-[white]">
        <Header />
        <Products />
      </Container>
      <Footer />
    </>
  );
}
