import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import { Footer } from "home/Footer";
import { Spinner } from "./Spinner";

const Header = lazy(() => import("home/Header"));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<Spinner />}>
      <Header />
    </Suspense>
    <div className="m-5">Pdp page content</div>
    <Footer />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
