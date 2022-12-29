const API = "http://localhost:8080";

export const getProducts = () =>
  fetch(`${API}/products`).then((res) => res.json());

export const getProductById = (id: string) =>
  fetch(`${API}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}
