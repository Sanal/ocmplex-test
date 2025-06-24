import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          return;
        } else {
          set({ items: [...get().items, { ...item, quantity: 1 }] });
        }
      },
      increment: (id) => {
        const existing = get().items.find((item) => item.id === id);
        if (existing) {
          set({
            items: get().items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        }
      },
      decrement: (id) => {
        const existing = get().items.find((item) => item.id === id);
        if (existing) {
          const { quantity } = existing;
          if (quantity - 1 > 0) {
            set({
              items: get().items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            });
          } else {
            set({
              items: get().items.filter((item) => item.id !== id),
            });
          }
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    { name: "cart-storage" }
  )
);
