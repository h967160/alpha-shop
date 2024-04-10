import { useContext } from "react";
import CheckoutContext from "@/context/CheckoutContext";
import styles from "./Step3.module.scss";
export default function Step3() {
  const { cardInfo, handleInputChange } = useContext(CheckoutContext);

  return (
    // credit-card phase
    <form className="col col-12" data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input
              type="text"
              placeholder="John Doe"
              name="cardHolderName"
              value={cardInfo.cardHolderName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>卡號</div>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              name="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>有效期限</div>
            <input
              type="text"
              placeholder="MM/YY"
              name="cardExpiryDate"
              value={cardInfo.cardExpiryDate}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input
              type="text"
              placeholder="123"
              name="cardCVC"
              value={cardInfo.cardCVC}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
