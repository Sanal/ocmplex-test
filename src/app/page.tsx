import Reviews from "@/modules/reviews";
import Products from "@/modules/products";

export default function Home() {
  return (
    <main>
      <h1>Магазин</h1>
      <Reviews />
      <Products />

      <section>
        <h2>Корзина</h2>
        <div>
          <b>Добавленные товары</b>
          <ul>
            <li>
              <span>товар 1</span>
              <span>x3</span>
              <span>3645₽</span>
            </li>
            <li>
              <span>товар 2</span>
              <span>x44</span>
              <span>53460₽</span>
            </li>
          </ul>
          <form method="POST" action="/">
            <input type="text" placeholder="+7 (___) ___ __-__" />
            <button type="submit">Заказать</button>
          </form>
        </div>
      </section>
    </main>
  );
}
