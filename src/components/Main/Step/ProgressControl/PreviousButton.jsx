import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import leftArrow from "@/assets/icons/left-arrow.svg";
import leftArrowDark from "@/assets/icons/left-arrow-dark.jpg";
import styles from "./ProgressControl.module.scss";

export default function PreviousButton({ onClick }) {
  const { theme } = useContext(ThemeContext);

  // 依照 dark mode切換icon
  const imageSource = theme === "dark" ? leftArrowDark : leftArrow;
  const altText = theme === "dark" ? "left-arrow-dark.jpg" : "left-arrow.svg";

  return (
    <button className={styles.prev} onClick={onClick}>
      <img className="cursor-point" src={imageSource} alt={altText} />
      上一步
    </button>
  );
}
