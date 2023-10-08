import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import styles from "./styles.module.scss";
import useGetSetting from "../../../hooks/setting/useGetSetting";
import { useTranslation } from "react-i18next";


const MobileMenu = ({ showMobMenuHandler, showMobMenu }) => {
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

  // console.log("i18n.dir():", i18n.dir())

  const [showSearchBox, setShowSearchBox] = useState(false);
  const openSearchBoxHandler = () => {
    setShowSearchBox(true);
  };
  const closeSearchBoxHandler = () => {
    setShowSearchBox(false);
  };

  return (
    <div className={showMobMenu ? styles.mobMenu : styles.mobMenuHidden} style={i18n.dir() === "ltr" ? {right:0} : {left: 0}}>
      <div className={styles.container}>
        <div className={styles.mobMenuOverlay} onClick={showMobMenuHandler}></div>
        <div className={styles.mobMenuWrapper}>
          <div className={styles.head}>
            <a href="/" className={styles.logo}>
              <img width={217} height={100} src={process.env.PUBLIC_URL + "/images/nescologo.png"} alt="" />
            </a>
            <button className={styles.closeBtn} onClick={showMobMenuHandler}>
              <CgClose />
            </button>
          </div>
          <div className={styles.search}>
            <button onClick={openSearchBoxHandler} className={styles.search__icon}>
              <FaSearch />
            </button>
            {
              showSearchBox ? (
                <div className={styles.searchBox}>
                  <button onClick={closeSearchBoxHandler} className={styles.closeSearchBtn}>
                    <CgClose />
                  </button>
                  <input type="text" placeholder="كيف يمكننا مساعدتك؟" />
                </div>
              ) : null
            }
          </div>
          <ul className={styles.linksList}>
            <li className={styles.listItem}>
              <a href="/about">{t("home-header-aboutus")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">{t("home-header-ourMenu")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">{t("home-header-joinOurFamily")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">{t("home-header-mediaCenter")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/store">{t("home-header-onlineStore")}</a>
            </li>
          </ul>
          <div className={styles.contacts}>
            <div className={styles.location}>
              <FaLocationDot />
              <a href="/">{t("home-header-storeLocator")}</a>
            </div>
            <h2 className={styles.title}>{t("home-header-stayConnected")}</h2>
            <div className={styles.phone}>
              <FaPhoneFlip />
              <a href="tel:920006843">920006843</a>
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
      </div>
    </div>
  )
}

export default MobileMenu