import Image from "next/image";
import styles from "./product-card.module.scss";
import { Button } from "@/components/button";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { image_url, title, description, price } = product;
  const formattedPrice = price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "rub",
    maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
  });

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
        <Button type="button">Купить</Button>
      </footer>
    </div>
  );
}
