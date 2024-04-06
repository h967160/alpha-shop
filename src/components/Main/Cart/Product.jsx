import styles from "./Cart.module.scss";
import ProductControl from "./ProductControl";

function Product({
  name,
  img,
  price,
  quantity,
  id,
  updateQuantity,
  removeProduct,
}) {
  // 扣除商品數量
  const handleMinus = () => {
    // 當數量為1時，直接移除商品
    if (quantity === 1) {
      removeProduct(id);
    } else if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  // 增加商品數量
  const handlePlus = () => {
    updateQuantity(id, quantity + 1);
  };

  return (
    <div className={`${styles.productContainer} col col-12`}>
      <img className={`${styles.imgContainer}`} src={img} alt={name} />
      <div className={`${styles.productInfo}`}>
        <div className={`${styles.productName}`}>{name}</div>
        <div className={`${styles.productControlContainer}`}>
          <ProductControl
            quantity={quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />
        </div>
        <div className={`${styles.price}`}>${price}</div>
      </div>
    </div>
  );
}

export default Product;
