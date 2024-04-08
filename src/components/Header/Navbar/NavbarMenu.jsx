import NavbarList from "./NavbarList";
import NavbarItems from "./NavbarItems";
import styles from "./Navbar.module.scss";
import toggle from "../../../assets/icons/toggle.svg";
import search from "../../../assets/icons/search.svg";
import cart from "../../../assets/icons/cart.svg";
import moon from "../../../assets/icons/moon.svg";

export default function NavbarMenu() {
  const menuItems = [
    { link: "#", text: "男款" },
    { link: "#", text: "女款" },
    { link: "#", text: "最新消息" },
    { link: "#", text: "客製商品" },
    { link: "#", text: "聯絡我們" },
  ];

  const actionItems = [
    { link: "#", icon: search, alt: "search.svg" },
    { link: "#", icon: cart, alt: "cart.svg" },
    { link: "#", icon: moon, alt: "moon.svg" },
  ];

  return (
    <>
      <input
        className={`${styles.navbarToggle}`}
        id="navbarToggle"
        type="checkbox"
      />
      <label htmlFor="navbarToggle" className={`${styles.burgerContainer}`}>
        <img
          className={`${styles.iconToggle} cursor-point`}
          src={toggle}
          alt="toggle.svg"
        />
      </label>

      <nav className={`${styles.navbarMenu}`}>
        <NavbarList items={menuItems} />
        <NavbarItems items={actionItems} />
      </nav>
    </>
  );
}
