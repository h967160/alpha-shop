import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import ProductList from "./ProductList";
import styles from "./Cart.module.scss";

// Cart Component
export default function Cart() {
  const { cartItems, updateQuantity, removeProduct } = useContext(CartContext);

  // 計算購物籃總價格
  function totalPrice(cartItems) {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
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
