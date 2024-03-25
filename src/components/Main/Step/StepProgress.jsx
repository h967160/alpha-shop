import pgComplete from "../../../assets/icons/pg-complete.svg";
import styles from "./StepProgress.module.scss";
export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <span
        className={`${styles.progressGroup} ${styles.active}`}
        data-phase="address"
      >
        <span className={`${styles.progressIcon}`}>
          <span className={`${styles.text}`}>1</span>
          <img
            className={`${styles.icon} cursor-point`}
            src={pgComplete}
            alt="pg-complete.svg"
          />
        </span>
        <span className={`${styles.progressLabel}`}>寄送地址</span>
      </span>
      <span className={`${styles.progressBar}`} data-order="1"></span>
      <span
        className={`${styles.progressGroup} ${styles.inactive}`}
        data-phase="shipping"
      >
        <span className={`${styles.progressIcon}`}>
          <span className={`${styles.text}`}>2</span>
        </span>
        <span className={`${styles.progressLabel}`}>運送方式</span>
      </span>
      <span className={`${styles.progressBar}`} data-order="2"></span>
      <span
        className={`${styles.progressGroup} ${styles.inactive}`}
        data-phase="credit-card"
      >
        <span className={`${styles.progressIcon}`}>
          <span className={`${styles.text}`}>3</span>
        </span>
        <span className={`${styles.progressLabel}`}>付款資訊</span>
      </span>
    </section>
  );
}
