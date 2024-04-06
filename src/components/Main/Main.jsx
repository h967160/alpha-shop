import { useState } from "react";
import "../../styles/reset.scss";
import "../../styles/base.scss";
import styles from "./Main.module.scss";
import StepContainer from "./Step/StepContainer";
import ProgressControl from "./Step/ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

export default function Main() {
  const [stepPhase, setStepPhase] = useState(1);
  const phaseMap = {
    1: "address",
    2: "shipping",
    3: "credit-card",
  };
  const dataPhase = phaseMap[stepPhase];

  // 下一步按鈕
  function handleClickNext() {
    if (stepPhase < 3) {
      setStepPhase(stepPhase + 1);
    }
  }

  // 上一步按鈕
  function handleClickPrevious() {
    if (stepPhase > 1) {
      setStepPhase(stepPhase - 1);
    }
  }

  return (
    <main className={`${styles.siteMain}`}>
      <div className={`${styles.mainContainer}`}>
        <StepContainer dataPhase={dataPhase} />
        <Cart />
        <ProgressControl
          handleClickNext={handleClickNext}
          handleClickPrevious={handleClickPrevious}
          dataPhase={dataPhase}
        />
      </div>
    </main>
  );
}
