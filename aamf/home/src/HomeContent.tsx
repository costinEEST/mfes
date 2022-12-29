import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";

import type { Product } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map(({ description, id, image, name, price }) => (
        <div key={id}>
          <img src={image} alt={name} />
          <div className="flex">
            <div className="flex-end">{currency.format(price)}</div>
          </div>
          <div className="text-sm mt-4">{description}</div>
        </div>
      ))}
    </div>
  );
}
