import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UseCart from "@/hooks/useCart";

export default function Cart() {
  return (
    <section>
      <div className="wrapper max-sm:px-2 max-sm:mx-2 md:px-5">
        <Header />
        <UseCart />
      </div>
      <Footer />
    </section>
  );
}
