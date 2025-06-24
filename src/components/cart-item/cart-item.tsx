import { formatCurrency } from "@/utils";
import styles from "./cart-item.module.scss";

type Props = {
  item: CartItem;
};

export function CartItem({ item }: Props) {
  const { title, quantity, price } = item;
  const formattedPrice = formatCurrency(price * quantity);

  return (
    <div className={styles.container}>
      <span>{title}</span>
      <span>x{quantity}</span>
      <span>{formattedPrice}</span>
    </div>
  );
}
