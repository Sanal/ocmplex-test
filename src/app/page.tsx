import Image from "next/image";
import dynamic from "next/dynamic";
import { ReviewsFallback } from "@/modules/reviews";
import { Suspense } from "react";

const Reviews = dynamic(() => import("@/modules/reviews"), { ssr: true });

export default function Home() {
  return (
    <main>
      <h1>Магазин</h1>
      <Suspense fallback={<ReviewsFallback />}>
        <Reviews />
      </Suspense>

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

      <section>
        <h2>Список товаров</h2>
        <ul>
          <li>
            <div>
              <Image
                src="https://placehold.co/400x600"
                alt="Placeholder"
                width={400}
                height={600}
              />
              <h3>название</h3>
              <p>
                Описание описание описание описание описание. ауццау, описание
                fe описание. fefe.
              </p>
              <p>
                <span>цена: 1215₽</span>
              </p>
              <button type="button">Купить</button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
