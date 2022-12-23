import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import Header from "./Header";
import { Footer } from "./Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="m-5">Home page content</div>
    <Footer />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
