"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  title: string;
  price: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  count: number;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  count: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, count: items.length }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}