import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const HeaderIcons = ({ customHeader }) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("AR");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const showAccountMenuHandler = () => {
    setShowAccountMenu(!showAccountMenu);
    setShowLangMenu(false);
  }

  const chooseLangHandler = (selectedLang) => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    setShowLangMenu(false);
  }

  const showLangHandler = () => {
    setShowLangMenu(!showLangMenu);
    setShowAccountMenu(false);
  }

  return (
    <div className={customHeader ? styles.iconsCustom : styles.icons}>
      <div className={styles.cart}>
        <FiShoppingCart />
        <span className={styles.itemsNum}>0</span>
      </div>
      <div className={styles.account}>
        <GoPerson onClick={showAccountMenuHandler} />
        {
          showAccountMenu ? (
            <ul className={styles.accountMenu}>
              <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                <a className={styles.link} href={process.env.PUBLIC_URL + "/login"}>{t("home-header-login")}</a>
              </li>
              <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                <a className={styles.link} href={process.env.PUBLIC_URL + "/register"}>{t("home-header-register")}</a>
              </li>
              <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                <a className={styles.link} href={process.env.PUBLIC_URL + "/track-order"}>{t("home-header-trackOrder")}</a>
              </li>
            </ul>
          ) : null
        }
      </div>
      <div className={styles.langBox}>
        <span onClick={showLangHandler} className={styles.selectedLang}>{lang}</span>
        {
          showLangMenu ? (
            <ul onChange={(e) => i18n.changeLanguage(e.target.value)} className={styles.selectLangList}>
              <li className={styles.item} onClick={() => chooseLangHandler("ar")}>AR</li>
              <li className={styles.item} onClick={() => chooseLangHandler("en")}>EN</li>
            </ul>
          ) : null
        }
      </div>
      {/* <div className={styles.langBox}>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)} className={styles.selectLang}>
          <option value="ar" defaultChecked>AR</option>
          <option value="en">EN</option>
        </select>
      </div> */}
    </div>
  )
}

export default HeaderIcons