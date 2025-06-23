type Props = {
  item: CartItem;
};

export function CartItem({ item }: Props) {
  const { title, quantity, getPrice } = item;
  return (
    <div>
      <span>{title}</span>
      <span>x{quantity}</span>
      <span>{getPrice()}₽</span>
    </div>
  );
}
