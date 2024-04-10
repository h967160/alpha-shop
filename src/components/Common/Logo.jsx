import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import logo from "@/assets/icons/logo.svg";
import logoDark from "@/assets/icons/logo-dark.jpg";
import styles from "./Logo.module.scss";

export default function Logo({ className }) {
  const { theme } = useContext(ThemeContext);
  const logoSrc = theme === "dark" ? logoDark : logo;
  const altText = theme === "dark" ? "logo-dark.jpg" : "logo.svg";
  return (
    <div className={`${className} ${styles.baseLogoContainer}`}>
      <img src={logoSrc} className="cursor-point" alt={altText} />
    </div>
  );
}
