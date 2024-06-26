import styles from "./StepContainer.module.scss";
import StepProgress from "./StepProgress/StepProgress";
import StepForm from "./StepForm";
export default function StepContainer({ dataPhase, stepPhase }) {
  return (
    <section className={`${styles.registerContainer} col col-lg-6 `}>
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <StepProgress stepPhase={stepPhase} />
      <StepForm dataPhase={dataPhase} />
    </section>
  );
}
