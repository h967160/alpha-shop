import styles from "./Header.module.scss";
import NavbarMenu from "./Navbar/NavbarMenu";
import Logo from "../Common/Logo";
export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>
        <NavbarMenu />
        <Logo className={styles.headerLogoContainer} />
      </div>
    </header>
  );
}
