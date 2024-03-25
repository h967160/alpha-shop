import rightArrow from "../../../assets/icons/right-arrow.svg";
// import leftArrow from "../../../assets/icons/left-arrow.svg";
import styles from "./ProgressControl.module.scss";
export default function ProgressControl() {
  return (
    //  progress-control
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="address"
      >
        <button className={`${styles.next}`}>
          下一步
          <img
            className="cursor-point`"
            src={rightArrow}
            alt="right-arrow.svg"
          />
        </button>
      </section>
      {/* <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="shipping"
      >
        <button className={`${styles.prev}`}>
          <img className="cursor-point`" src={leftArrow} alt="left-arrow.svg" />
          上一步
        </button>
        <button className={`${styles.next}`}>
          下一步
          <img
            className="cursor-point`"
            src={rightArrow}
            alt="right-arrow.svg"
          />
        </button>
      </section> */}
      {/* <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="credit-card"
      >
        <button className={`${styles.prev}`}>
          <img className="cursor-point`" src={leftArrow} alt="left-arrow.svg" />
          上一步
        </button>
        <button className={`${styles.next}`}>確認下單</button>
      </section> */}
    </section>
  );
}
