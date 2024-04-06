import styles from "./Navbar.module.scss";

export default function NavbarItems({ items }) {
  return (
    <ul className={`${styles.navList} ${styles.siteActionList}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.navItem}`}>
          {item.icon && (
            <img
              className={`${styles.navIcon} cursor-point`}
              src={item.icon}
              alt={item.alt}
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
