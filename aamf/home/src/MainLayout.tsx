import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import CartContent from "cart/CartContent";
import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import PDPContent from "pdp/PdpContent";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
