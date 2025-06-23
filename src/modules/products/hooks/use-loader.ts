import { useCallback, useEffect, useRef, useState } from "react";
import { PAGE_SIZE } from "@/constants";

export default function useLoader(initialItems: Product[]) {
  const [page, setPage] = useState(2);
  const [products, setProducts] = useState<Product[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [ended, setEnded] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || ended) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/products?page=${page}&page_size=${PAGE_SIZE}`
      );
      const data: ProductsResponse = await res.json();
      if (data.items.length > 0) {
        setProducts((prev) => [...prev, ...data.items]);
        setPage((prev) => prev + 1);
      } else {
        setEnded(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, ended]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  return { loaderRef, loading, products };
}
