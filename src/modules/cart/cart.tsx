"use client";

import { CartItem } from "@/components/cart-item";
import { PhoneInput } from "@/components/phone-input";
import styles from "./cart.module.scss";

type Props = {
  items: CartItem[];
};

export function Cart({ items }: Props) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className="visually-hidden">Корзина</h2>
      <div className={styles.container}>
        <h3 className={styles.title}>Добавленные товары</h3>
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
