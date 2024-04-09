import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import NavbarList from "./NavbarList";
import NavbarItems from "./NavbarItems";
import styles from "./Navbar.module.scss";
import search from "../../../assets/icons/search.svg";
import searchDark from "../../../assets/icons/search-dark.jpg";
import cart from "../../../assets/icons/cart.svg";
import cartDark from "../../../assets/icons/cart-dark.jpg";
import moon from "../../../assets/icons/moon.svg";
import sun from "../../../assets/icons/sun.svg";

export default function NavbarMenu() {
  const { theme } = useContext(ThemeContext);

  const menuItems = [
    { link: "#", text: "男款" },
    { link: "#", text: "女款" },
    { link: "#", text: "最新消息" },
    { link: "#", text: "客製商品" },
    { link: "#", text: "聯絡我們" },
  ];

  // 不同主題的icon
  const icons = {
    light: {
      search: search,
      cart: cart,
      themeToggle: moon,
    },
    dark: {
      search: searchDark,
      cart: cartDark,
      themeToggle: sun,
    },
  };

  // 處理search.cart icon的alt文字切換
  const getAltText = (name) => {
    return theme === "dark" ? `${name}-dark.jpg` : `${name}.svg`;
  };

  const actionItems = [
    {
      link: "#",
      icon: icons[theme].search,
      alt: getAltText("search"),
    },
    {
      link: "#",
      icon: icons[theme].cart,
      alt: getAltText("cart"),
    },
    {
      link: "#",
      icon: icons[theme].themeToggle,
      alt: theme === "dark" ? "sun.svg" : "moon.svg",
    },
  ];

  return (
    <>
      <nav className={`${styles.navbarMenu}`}>
        <NavbarList items={menuItems} />
        <NavbarItems items={actionItems} />
      </nav>
    </>
  );
}
