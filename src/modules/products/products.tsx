"use client";

import ProductCard from "@/components/product-card";
import useLoader from "./hooks/use-loader";
import styles from "./products.module.scss";

type Props = {
  initialItems: Product[];
};

export function Products({ initialItems }: Props) {
  const { loaderRef, loading, ended, products } = useLoader(initialItems);

  return (
    <section className={styles.sectionContainer}>
      <h2 className="visually-hidden">Список товаров</h2>
      <ul className={styles.container}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div ref={loaderRef} className={styles.loaderContainer}>
        {loading && (
          <>
            <span className="visually-hidden">Загрузка…</span>
            <div className={styles.loader} />
          </>
        )}
      </div>
      {ended && (
        <div className={styles.endOfList}>
          <span>Конец списка</span>
        </div>
      )}
    </section>
  );
}
