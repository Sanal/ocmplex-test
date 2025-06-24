import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "@/stores/useCartStore";
import { prepareOrderItems } from "@/utils";
import { ORDERS_URL } from "@/constants";
import { OrderFormValues, orderSchema } from "../schema";

const defaultValues: OrderFormValues = { phone: "", cart: [] };
const resolver = zodResolver(orderSchema);

type OrderResponseState = OrderResponse | null;

export default function useOrderForm() {
  const [orderResponse, setOrderResponse] = useState<OrderResponseState>(null);
  const { items, clearCart } = useCartStore();
  const form = useForm<OrderFormValues>({ resolver, defaultValues });

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(() => {
    const orderItems = prepareOrderItems(items);
    setValue("cart", orderItems, { shouldValidate: !!orderItems.length });
  }, [items, setValue]);

  useEffect(() => {
    const savedPhone = localStorage.getItem("order-phone");
    if (savedPhone) {
      setValue("phone", savedPhone);
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.phone) {
        localStorage.setItem("order-phone", value.phone);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<OrderFormValues> = async (data) => {
    try {
      const res = await fetch(ORDERS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Ошибка при отправке заказа");
      }
      const result = (await res.json()) as OrderResponse;
      setOrderResponse(result);
      clearCart();
    } catch (err) {
      alert("Ошибка: " + JSON.stringify(err));
    }
  };

  return {
    control,
    errors,
    orderResponse,
    handleSubmit: handleSubmit(onSubmit),
  };
}
