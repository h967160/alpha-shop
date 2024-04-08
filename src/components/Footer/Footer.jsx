import styles from "./Footer.module.scss";
import Logo from "../Common/Logo";
import FooterSection from "./FooterSection";
import FooterContactInfo from "./FooterContactInfo";

export default function Footer() {
  const sections = [
    { title: "客戶服務", links: ["運送說明", "退換貨相關", "付款資訊", "FAQ"] },
    { title: "關於我們", links: ["品牌故事", "媒體聯繫", "Press kit"] },
    { title: "資訊", links: ["隱私權政策", "Cookie", "GDPR"] },
  ];

  return (
    <footer className={`${styles.siteFooter}`}>
      <div className={`${styles.footerContainer}`}>
        <section className={`${styles.footerSection}`}>
          <Logo className={`${styles.footerLogoContainer}`} />
        </section>
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
        <FooterContactInfo />
      </div>
    </footer>
  );
}
