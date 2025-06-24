import Image from "next/image";
import styles from "./product-card.module.scss";
import { Button } from "@/components/button";
import { formatCurrency } from "@/utils";

type Props = {
  product: Product;
  quantity?: number;
  add: (product: Product) => void;
  increment: (id: CartItem["id"]) => void;
  decrement: (id: CartItem["id"]) => void;
};

export function ProductCard({
  product,
  quantity,
  add,
  increment,
  decrement,
}: Props) {
  const { image_url, title, description, price, id } = product;
  const formattedPrice = formatCurrency(price);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image_url} alt={title} width={400} height={600} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <footer className={styles.footer}>
        <p className={styles.priceTag}>
          <b>Цена:</b> {formattedPrice}
        </p>
        {!quantity ? (
          <Button type="button" onClick={() => add(product)}>
            Купить
          </Button>
        ) : (
          <div className={styles.counterContainer}>
            <Button type="button" onClick={() => decrement(id)}>
              -
            </Button>
            <span className={styles.quantity}>{quantity}</span>
            <Button type="button" onClick={() => increment(id)}>
              +
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
}
