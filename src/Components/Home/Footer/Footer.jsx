import { useTranslation } from "react-i18next";
import useGetSetting from "../../../hooks/setting/useGetSetting";
import styles from "./styles.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [
    faqsData,
    email,
    mobile,
    website_name,
    facebook_link,
    instgram_link,
    twitter_link,
    address,
    whatsapp,
    android_link,
    ios_link,
    policy,
    cities
  ] = useGetSetting();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.top}>
          <div className={styles.payMethods}>
            <p className={styles.text}>{t("home-footer-payMethods")}</p>
            <div className={styles.imgs}>
              <a href="/">
                <img width={217} height={47} src={process.env.PUBLIC_URL + "/images/visa.png"} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.contactus}>
            <p className={styles.text}>{t("home-footer-contactUsOn")}</p>
            <a href="tel:920006843">920006843</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            <div className={styles.copyrights}>
              <p>{t("home-footer-copyrights")}</p>
            </div>
            <ul className={styles.linksList}>
              <li className={styles.item}>
                <a href="/sitemap">{t("home-footer-siteMap")}</a>
              </li>
              <li className={styles.item}>
                <a href="/termsConditions">{t("home-footer-terms")}</a>
              </li>
              <li className={styles.item}>
                <a href="/faqs">{t("home-footer-faq")}</a>
              </li>
              <li className={styles.item}>
                <a href="/contact-us">{t("home-footer-contactUs")}</a>
              </li>
              <li className={styles.item}>
                <a href="/">{t("home-footer-corporateLogin")}</a>
              </li>
            </ul>
          </div>
          <ul className={styles.socialList}>
            <li className={styles.socialList__item}>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li className={styles.socialList__item}>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li className={styles.socialList__item}>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer