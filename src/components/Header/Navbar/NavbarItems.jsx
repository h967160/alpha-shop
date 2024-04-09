import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import styles from "./Navbar.module.scss";

export default function NavbarItems({ items }) {
  const { handleToggleTheme } = useContext(ThemeContext);
  return (
    <ul className={`${styles.navList} ${styles.siteActionList}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.navItem}`}>
          {item.icon && (
            <img
              className={`${styles.navIcon} cursor-point`}
              src={item.icon}
              alt={item.alt}
              onClick={
                item.alt === "moon.svg" || item.alt === "sun.svg"
                  ? handleToggleTheme
                  : null
              }
            />
          )}
          <a className={`${styles.navLink}`} href={item.link}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
