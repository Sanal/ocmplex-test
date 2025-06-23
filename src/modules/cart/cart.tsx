"use client";

import { useState } from "react";
import { CartItem } from "@/components/cart-item";
import { PhoneInput } from "@/components/phone-input";
import { Button } from "@/components/button";
import styles from "./cart.module.scss";

type Props = {
  items: CartItem[];
};

export function Cart({ items }: Props) {
  const [phone, setPhone] = useState("");

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
          <div className={styles.cartForm}>
            <PhoneInput value={phone} name="phone" onChange={setPhone} />
            <Button type="submit">Заказать</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
