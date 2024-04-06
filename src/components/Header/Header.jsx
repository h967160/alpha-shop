import styles from "./Header.module.scss";
import NavbarMenu from "./Navbar/NavbarMenu";
export default function Header() {
  return (
    <header className={`${styles.siteHeader}`}>
      <div className={`${styles.headerContainer} mx-auto`}>
        <NavbarMenu />
      </div>
    </header>
  );
}
