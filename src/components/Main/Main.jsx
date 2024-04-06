import { useState } from "react";
import "../../styles/reset.scss";
import "../../styles/base.scss";
import styles from "./Main.module.scss";
import StepContainer from "./Step/StepContainer";
import ProgressControl from "./Step/ProgressControl";
import Cart from "./Cart/Cart";

export default function Main() {
  const [stepPhase, setStepPhase] = useState(1);

  return (
    <main className={`${styles.siteMain}`}>
      <div className={`${styles.mainContainer}`}>
        <StepContainer stepPhase={stepPhase} />
        <Cart />
        <ProgressControl stepPhase={stepPhase} />
      </div>
    </main>
  );
}
