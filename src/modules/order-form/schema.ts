import { z } from "zod";

export const orderSchema = z.object({
  phone: z
    .string()
    .length(11, "Телефон должен содержать 11 цифр")
    .regex(/^7\d{10}$/, "Некорректный формат номера"),
  cart: z
    .array(z.object({ id: z.number(), quantity: z.number() }))
    .min(1, "Корзина пуста"),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
