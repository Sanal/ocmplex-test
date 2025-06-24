import { CartItem } from "@/components/cart-item";
import styles from "./parts.module.scss";

type Props = {
  items: CartItem[];
};

export function CartItemsList({ items }: Props) {
  if (!items.length) {
    return <p className={styles.emptyItemsList}>Здесь пока пусто</p>;
  }

  return (
    <ul className={styles.itemsList}>
      {items.map((item) => (
        <li key={item.id}>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  );
}
