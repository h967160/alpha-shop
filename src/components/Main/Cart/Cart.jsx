import { useState } from "react";
import ProductList from "./ProductList";
import styles from "./Cart.module.scss";

// 計算購物籃總價格
function totalPrice(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Cart Component
export default function Cart() {
  // 定義購物籃中的商品狀態
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

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={`${styles.cartTitle}`}>購物籃</h3>
      <ProductList
        products={cartItems}
        updateQuantity={updateQuantity}
        removeProduct={removeProduct}
      />
      {/* 如果購物籃中沒有商品，顯示提示訊息 */}
      {cartItems.length === 0 && (
        <p className={styles.emptyCartMessage}>還沒有加入商品哦！</p>
      )}
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={`${styles.text}`}>運費</div>
        <div className={`${styles.price}`}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={`${styles.text}`}>小計</div>
        <div className={`${styles.price}`}>${totalPrice(cartItems)}</div>
      </section>
    </section>
  );
}
