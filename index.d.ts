type Product = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
};

type Review = {
  id: number;
  text: string;
};

type OrderItem = {
  id: number;
  quantity: number;
};

type OrderData = {
  phone: string;
  cart: OrderItem[];
};

type OrderResponse = {
  success: number;
  error?: string;
};

interface Cart {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: CartItem["id"]) => void;
}

interface CartItem {
  id: Product["id"];
  title: Product["title"];
  quantity: number;
  getPrice: () => number;
  increment: () => void;
  decrement: () => void;
}
