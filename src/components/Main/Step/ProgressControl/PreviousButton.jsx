import leftArrow from "../../../../assets/icons/left-arrow.svg";
import styles from "./ProgressControl.module.scss";

export default function PreviousButton({ onClick }) {
  return (
    <button className={`${styles.prev}`} onClick={onClick}>
      <img className="cursor-point" src={leftArrow} alt="left-arrow.svg" />
      上一步
    </button>
  );
}
