import { PAGE_SIZE } from "@/constants";
import { Products } from "./products";

async function fetchInitial(): Promise<ProductsResponse> {
  const res = await fetch(
    `http://o-complex.com:1337/products?page=1&page_size=${PAGE_SIZE}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function ProductsServer() {
  const res = await fetchInitial();

  return <Products initialItems={res.items} />;
}
