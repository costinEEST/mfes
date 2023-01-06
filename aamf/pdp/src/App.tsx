import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import SafeComponent from "./SafeComponent";
import { Spinner } from "./Spinner";
import CartContent from "cart/CartContent";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import PDPContent from "pdp/PdpContent";

const Header = lazy(() => import("home/Header"));

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<Spinner />}>
        <SafeComponent>
          <Header />
        </SafeComponent>
      </Suspense>
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

createRoot(document.getElementById("app")!).render(<App />);
