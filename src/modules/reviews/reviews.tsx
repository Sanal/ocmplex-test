import { Suspense } from "react";
import { ReviewCard } from "@/components/review-card";
import { REVIEWS_URL } from "@/constants";
import styles from "./reviews.module.scss";

async function fetchReviews(): Promise<Review[]> {
  const res = await fetch(REVIEWS_URL, { cache: "no-store" });

  if (!res.ok) throw new Error("Не удалось загрузить отзывы");
  return res.json();
}

async function ReviewsSection() {
  const reviews = await fetchReviews();

  return (
    <section className={styles.sectionContainer}>
      <h2 className="visually-hidden">Отзывы</h2>
      <ul className={styles.container}>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard content={review.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReviewsFallback() {
  return <p>Загрузка отзывов…</p>;
}

export function Reviews() {
  return (
    <Suspense fallback={<ReviewsFallback />}>
      <ReviewsSection />
    </Suspense>
  );
}
