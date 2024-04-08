import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import styles from "./Footer.module.scss";

export default function FooterContactInfo() {
  return (
    <section className={`${styles.footerSection}`}>
      <h2 className={`${styles.sectionTitle}`}>追蹤 ALPHA Shop</h2>
      <div className={`${styles.sectionContent}`}>
        <div className={`${styles.telInfo}`}>+886 02123-45678</div>
        <div className={`${styles.socialIconGroup}`}>
          <img
            src={facebook}
            alt="facebook.svg"
            className={`${styles.socialIcon} cursor-point`}
          />
          <img
            src={instagram}
            alt="instagram.svg"
            className={`${styles.socialIcon} cursor-point`}
          />
          <img
            src={whatsapp}
            alt="whatsapp.svg"
            className={`${styles.socialIcon} cursor-point`}
          />
        </div>
      </div>
    </section>
  );
}
