import logo from "../../assets/icons/logo.svg";
import styles from "./Logo.module.scss";

export default function Logo({ className }) {
  return (
    <div className={`${className} ${styles.baseLogoContainer}`}>
      <img src={logo} className="cursor-point" alt="logo.svg" />
    </div>
  );
}
