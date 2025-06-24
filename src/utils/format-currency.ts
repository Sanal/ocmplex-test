export function formatCurrency(num: number) {
  return num.toLocaleString("ru-RU", {
    style: "currency",
    currency: "rub",
    maximumFractionDigits: Number.isInteger(num) ? 0 : 2,
  });
}
