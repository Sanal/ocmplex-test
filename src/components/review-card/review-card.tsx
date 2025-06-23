import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import styles from "./review-card.module.scss";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

type Props = {
  content: Review["text"];
};

export function ReviewCard({ content }: Props) {
  const cleanHtml = DOMPurify.sanitize(content);

  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
