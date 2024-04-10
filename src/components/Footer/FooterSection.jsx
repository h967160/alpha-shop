import styles from "./Footer.module.scss";
export default function FooterSection({ title, links }) {
  return (
    <section className={styles.footerSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>
        {links.map((link, index) => (
          // 加下面這行就不會再出現因為 href="#"的警告
          // eslint-disable-next-line
          <a key={index} className={`${styles.pageLink}`} href="#">
            {link}
          </a>
        ))}
      </div>
    </section>
  );
}
