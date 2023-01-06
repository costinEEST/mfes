import React from "react";
import { createRoot } from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "./MainLayout";

createRoot(document.getElementById("app")!).render(<MainLayout />);
