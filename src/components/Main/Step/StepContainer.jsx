import styles from "./StepContainer.module.scss";
import StepProgress from "./StepProgress";
import StepForm from "./StepForm";

export default function StepContainer() {
  return (
    <section
      className={`${styles.registerContainer} col col-lg-6 col-sm-12`}
      data-phase="1"
      data-total-price="0"
    >
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <StepProgress />
      <StepForm />
    </section>
  );
}
