import React from "react";
import { createRoot } from "react-dom/client";

import MainLayout from "home/MainLayout";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

createRoot(document.getElementById("app")).render(<MainLayout />);
