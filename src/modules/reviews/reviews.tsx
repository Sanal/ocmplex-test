import { ReviewCard } from "@/components/review-card";

async function fetchReviews(): Promise<Review[]> {
  const res = await fetch("http://o-complex.com:1337/reviews", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Не удалось загрузить отзывы");
  return res.json();
}

export async function Reviews() {
  const reviews = await fetchReviews();

  return (
    <section>
      <h2>Отзывы</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard content={review.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
