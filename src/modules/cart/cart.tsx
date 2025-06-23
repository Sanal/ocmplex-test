"use client";

import { CartItem } from "@/components/cart-item";
import { PhoneInput } from "@/components/phone-input";

type Props = {
  items: CartItem[];
};

export function Cart({ items }: Props) {
  return (
    <section>
      <h2 className="visually-hidden">Корзина</h2>
      <div>
        <b>Добавленные товары</b>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <form method="POST" action="/">
          <PhoneInput value="test" onChange={(value) => console.log(value)} />
          <button type="submit">Заказать</button>
        </form>
      </div>
    </section>
  );
}
