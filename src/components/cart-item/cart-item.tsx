import styles from "./cart-item.module.scss";

type Props = {
  item: CartItem;
};

export function CartItem({ item }: Props) {
  const { title, quantity, getPrice } = item;
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <span>x{quantity}</span>
      <span>{getPrice()}₽</span>
    </div>
  );
}
