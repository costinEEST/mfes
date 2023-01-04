import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import { Footer } from "home/Footer";
import SafeComponent from "./SafeComponent";
import { Spinner } from "./Spinner";
import PDPContent from "./PdpContent";

const Header = lazy(() => import("home/Header"));

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<Spinner />}>
        <SafeComponent>
          <Header />
        </SafeComponent>
      </Suspense>
      <div className="m-5">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

createRoot(document.getElementById("app")!).render(<App />);
