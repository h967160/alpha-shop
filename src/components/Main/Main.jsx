import "../../styles/reset.scss";
import "../../styles/base.scss";
import styles from "./Main.module.scss";
export default function Main({ children }) {
  return (
    <main className={`${styles.siteMain}`}>
      <div className={`${styles.mainContainer}`}>{children}</div>
    </main>
  );
}
