"use client";

import { useCartStore } from "@/stores/useCartStore";
import { OrderForm } from "@/modules/order-form";
import styles from "./cart.module.scss";
import { CartItemsList } from "@/modules/cart/parts/cart-items-list";

export function Cart() {
  const { items } = useCartStore();

  return (
    <section className={styles.sectionContainer}>
      <h2 className="visually-hidden">Корзина</h2>
      <div className={styles.container}>
        <h3 className={styles.title}>Добавленные товары</h3>
        <CartItemsList items={items} />
        <OrderForm />
      </div>
    </section>
  );
}
