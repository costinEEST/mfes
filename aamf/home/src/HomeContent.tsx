import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";
import { useLoggedIn, addToCart } from "cart/cart";

import type { Product } from "./products";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map(({ description, id, image, name, price }) => (
        <div key={id}>
          <Link to={`/product/${id}`}>
            <img src={image} alt={name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${id}`}>{name}</Link>
            </div>
            <div className="flex-end">{currency.format(price)}</div>
          </div>
          <div className="text-sm mt-4">{description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                id={`addToCart_${id}`}
                onClick={() => addToCart(id)}
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
