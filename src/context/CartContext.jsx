import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 定義購物籃中的商品狀態,初始為兩個商品
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      name: "貓咪干干",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ]);

  // 更新商品數量
  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems); // 更新購物籃商品狀態
  };

  // 移除商品
  const removeProduct = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // 向子元件傳遞 value
  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

// 導出 CartContext
export default CartContext;
