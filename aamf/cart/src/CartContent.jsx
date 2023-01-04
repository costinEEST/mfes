import React, { useState, useEffect } from "react";

import Login from "./Login";
import MiniCart from "./MiniCart";

import { jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div>
      <p>JWT: {token}</p>
      <Login />
      <MiniCart />
    </div>
  );
}
