import { useContext } from "react";
import CartContext from "@/context/CartContext";
import CheckoutContext from "@/context/CheckoutContext";
import ProductList from "./ProductList";
import styles from "./Cart.module.scss";

// Cart Component
export default function Cart() {
  const { cartItems, updateQuantity, totalPrice, removeProduct } =
    useContext(CartContext);
  const { shippingMethod } = useContext(CheckoutContext);

  return (
    <section className={`${styles.cartContainer} col col-lg-5 `}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList
        products={cartItems}
        updateQuantity={updateQuantity}
        removeProduct={removeProduct}
      />
      {/* 如果購物籃中沒有商品, 顯示提示訊息 */}
      {cartItems.length === 0 && (
        <p className={styles.emptyCartMessage}>還沒有加入商品哦！</p>
      )}
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>
          {/* 預設為免費, 如有選擇運輸方式則顯示運費 */}
          {shippingMethod ? `$${shippingMethod.price} ` : "免費"}
        </div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>
          {/* 如果購物車中沒有商品, 顯示 $0, 否則顯示小計 */}
          {cartItems.length === 0
            ? "$0"
            : `$${totalPrice(cartItems, shippingMethod)}`}
        </div>
      </section>
    </section>
  );
}
