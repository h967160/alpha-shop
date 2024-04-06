import { Step } from "./Step";
import styles from "./StepProgress.module.scss";

export default function StepProgress({ stepPhase }) {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <Step
        number="1"
        label="寄送地址"
        isDefault={stepPhase === 1}
        isActive={stepPhase === 1}
        isCompleted={stepPhase > 1}
      />
      <span className={`${styles.progressBar}`}></span>
      <Step
        number="2"
        label="運送方式"
        isActive={stepPhase === 2}
        isCompleted={stepPhase > 2}
      />
      <span className={`${styles.progressBar}`}></span>
      <Step number="3" label="付款資訊" isActive={stepPhase === 3} />
    </section>
  );
}
