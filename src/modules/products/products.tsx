"use client";

import ProductCard from "@/components/product-card";
import useLoader from "./hooks/use-loader";
import styles from "./products.module.scss";

type Props = {
  initialItems: Product[];
};

export function Products({ initialItems }: Props) {
  const { loaderRef, loading, products } = useLoader(initialItems);

  return (
    <section>
      <h2 className="visually-hidden">Список товаров</h2>
      <ul className={styles.productsGrid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: "40px" }}>
        {loading && <p>Загрузка…</p>}
      </div>
    </section>
  );
}
