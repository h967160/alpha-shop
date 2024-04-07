import { useContext } from "react";
import CheckoutContext from "../../../../context/CheckoutContext";
import styles from "./Step2.module.scss";

export default function Step2() {
  const { shippingMethod, handleShippingChange } = useContext(CheckoutContext);
  return (
    //  shipping phase
    <form className="col col-12" data-phase="shipping">
      <h3 className={`${styles.formTitle}`}>運送方式</h3>
      <section className={`${styles.formBody} col col-12`}>
        <label className={`${styles.radioGroup} col col-12`}>
          <input
            id="shipping-standard"
            type="radio"
            name="shipping"
            checked={
              shippingMethod && shippingMethod.id === "shipping-standard"
            }
            onChange={handleShippingChange}
            data-price="0"a
          />
          <div className={`${styles.radioInfo}`}>
            <div className={`${styles.infoControl} col col-12`}>
              <div className={`${styles.text}`}>標準運送</div>
              <div className={`${styles.price}`}>免費</div>
            </div>
            <div className={`${styles.period} col col-12`}>約 3~7 個工作天</div>
          </div>
          <div className={`${styles.radioBoxBorder}`}></div>
        </label>
        <label className={`${styles.radioGroup} col col-12`}>
          <input
            id="shipping-dhl"
            type="radio"
            name="shipping"
            checked={shippingMethod && shippingMethod.id === "shipping-dhl"}
            onChange={handleShippingChange}
            data-price="500"
          />
          <div className={`${styles.radioInfo}`}>
            <div className={`${styles.infoControl} col col-12`}>
              <div className={`${styles.text}`}>DHL 貨運</div>
              <div className={`${styles.price}`}>$500</div>
            </div>
            <div className={`${styles.period} col col-12`}>48 小時內送達</div>
          </div>
          <div className={`${styles.radioBoxBorder}`}></div>
        </label>
      </section>
    </form>
  );
}
