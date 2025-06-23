import Reviews from "@/modules/reviews";
import Products from "@/modules/products";
import { Cart } from "@/modules/cart";

export default function Home() {
  return (
    <main>
      <h1 className="visually-hidden">Магазин</h1>
      <Reviews />
      <Cart items={[]} />
      <Products />
    </main>
  );
}
