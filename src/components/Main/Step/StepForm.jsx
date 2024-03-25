import styles from "./StepForm.module.scss";
// import Step1 from "./Form/Step1";
import Step2 from "./Form/Step2";
export default function StepForm() {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      {/* <Step1 /> */}
      <Step2 />
    </section>
  );
}
