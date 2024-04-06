import styles from "./Navbar.module.scss";

export default function NavbarList({ items }) {
  return (
    <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.navItem}`}>
          <a className={`${styles.navLink}`} href={item.link}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
