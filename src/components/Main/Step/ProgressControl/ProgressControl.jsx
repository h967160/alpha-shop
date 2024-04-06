import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import styles from "./ProgressControl.module.scss";

export default function ProgressControl({
  dataPhase,
  handleClickNext,
  handleClickPrevious,
}) {
  let buttonGroup;
  switch (dataPhase) {
    case "address":
      buttonGroup = (
        <section className={`${styles.buttonGroup} col col-12`}>
          <NextButton onClick={handleClickNext} />
        </section>
      );
      break;
    case "shipping":
      buttonGroup = (
        <section className={`${styles.buttonGroup} col col-12`}>
          <PreviousButton onClick={handleClickPrevious} />
          <NextButton onClick={handleClickNext} />
        </section>
      );
      break;
    case "credit-card":
      buttonGroup = (
        <section className={`${styles.buttonGroup} col col-12`}>
          <PreviousButton onClick={handleClickPrevious} />
          <button
            className={`${styles.next} cursor-point`}
            onClick={handleClickNext}
          >
            確認下單
          </button>
        </section>
      );
      break;
    default:
      buttonGroup = null;
  }

  return (
    //  progress-control
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      {buttonGroup}
    </section>
  );
}
