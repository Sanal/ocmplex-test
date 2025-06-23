import Image from "next/image";
import styles from "./product-card.module.scss";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { image_url, title, description, price } = product;

  return (
    <div className={styles.container}>
      <Image src={image_url} alt={title} width={400} height={600} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>цена: {price.toString()}₽</p>
      <button type="button">Купить</button>
    </div>
  );
}
