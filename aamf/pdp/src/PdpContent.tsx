import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";
import placeAddToCart from "addtocart/placeAddToCart";

import type { Product } from "home/products";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;

  const { description, image, longDescription, name, price } = product;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{description}</div>
        <div className="mt-10">{longDescription}</div>
      </div>
    </div>
  );
}
