import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import styles from "./Cart.module.scss";

// 控制+-商品數量
function ProductControl({ quantity, handleMinus, handlePlus }) {
  return (
    <div className={`${styles.productControl}`}>
      <img
        className={`${styles.productAction} minus`}
        src={minus}
        alt="minus.svg"
        onClick={handleMinus}
      />
      <span className={`${styles.productCount}`}>{quantity}</span>
      <img
        className={`${styles.productAction} plus`}
        src={plus}
        alt="plus.svg"
        onClick={handlePlus}
      />
    </div>
  );
}

export default ProductControl;
