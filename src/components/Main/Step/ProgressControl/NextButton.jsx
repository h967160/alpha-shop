import rightArrow from "../../../../assets/icons/right-arrow.svg";
import styles from "./ProgressControl.module.scss";

export default function NextButton({ onClick }) {
  return (
    <button className={`${styles.next}`} onClick={onClick}>
      下一步
      <img className="cursor-point" src={rightArrow} alt="right-arrow.svg" />
    </button>
  );
}
