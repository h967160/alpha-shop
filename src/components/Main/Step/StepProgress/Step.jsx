import pgComplete from "@/assets/icons/pg-complete.svg";
import styles from "./StepProgress.module.scss";

// 根據步驟狀態決定顯示樣式
function getStepStyle(isDefault, isActive, isCompleted) {
  if (isDefault) {
    return styles.active;
  }
  if (isActive) {
    return styles.currentActive;
  }
  if (isCompleted) {
    return styles.completed;
  }
  return styles.inActive;
}

// 單一步驟元件
export function Step({ number, label, isDefault, isActive, isCompleted }) {
  const stepStyle = getStepStyle(isDefault, isActive, isCompleted);
  return (
    <span className={`${styles.progressGroup} ${stepStyle}`}>
      <span className={`${styles.progressIcon}`}>
        <span className={`${styles.text}`}>{number}</span>
        {isActive || isCompleted ? (
          <img
            className={`${styles.icon} cursor-point`}
            src={pgComplete}
            alt="pg-complete.svg"
          />
        ) : null}
      </span>
      <span className={`${styles.progressLabel}`}>{label}</span>
    </span>
  );
}
