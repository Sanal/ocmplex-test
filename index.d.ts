type Product = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
};

type ProductsResponse = {
  page: number;
  amount: number;
  total: number;
  items: Product[];
};

type Review = {
  id: number;
  text: string;
};

type OrderItem = {
  id: Product["id"];
  quantity: CartItem["quantity"];
};

type OrderData = {
  phone: string;
  cart: OrderItem[];
};

type OrderResponse = {
  success: number;
  error?: string;
};

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  increment: (id: CartItem["id"]) => void;
  decrement: (id: CartItem["id"]) => void;
  removeItem: (id: CartItem["id"]) => void;
  clearCart: () => void;
}

interface CartItem {
  id: Product["id"];
  title: Product["title"];
  price: Product["price"];
  quantity: number;
}
