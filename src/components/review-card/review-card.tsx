type Props = {
  content: Review["text"];
};

export function ReviewCard({ content }: Props) {
  return <div>{content}</div>;
}
