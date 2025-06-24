import { PAGE_SIZE, PRODUCTS_URL } from "@/constants";
import { Products } from "./products";

async function fetchInitial(): Promise<ProductsResponse> {
  const page = (1).toString();
  const page_size = PAGE_SIZE.toString();
  const params = new URLSearchParams({ page, page_size }).toString();
  const res = await fetch(`${PRODUCTS_URL}?${params}`, { cache: "no-store" });
  return res.json();
}

export async function ProductsServer() {
  const res = await fetchInitial();

  return <Products initialItems={res.items} />;
}
