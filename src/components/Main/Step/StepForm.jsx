import styles from "./StepForm.module.scss";
import Step1 from "./Form/Step1";
export default function StepForm() {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      <Step1 />
    </section>
  );
}
