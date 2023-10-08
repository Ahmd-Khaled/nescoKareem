import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaBarsStaggered } from "react-icons/fa6"
import styles from "./styles.module.scss";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { useTranslation } from 'react-i18next';

const Header = ({ customHeader }) => {
  const { t, i18n } = useTranslation();
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [showCountriesMenu, setShowCountriesMenu] = useState(false);
  const [selectCountry, setSelectCountry] = useState(t("home-header-country-chooseCountry"));

  // useEffect(() => {
  //   if (i18n.dir) {
  //     setSelectCountry(t("home-header-country-chooseCountry"));
  //   }
  // }, [selectCountry, i18n.dir])

  const showMobMenuHandler = () => {
    setShowMobMenu(!showMobMenu);
  };

  const chooseCountryHandler = (country) => {
    setSelectCountry(country);
    setShowCountriesMenu(false);
  }

  const showCountriesMenuHandler = () => {
    setShowCountriesMenu(!showCountriesMenu)
  }

  return (
    <header className={customHeader ? styles.customHeader : styles.header}>
      <MobileMenu showMobMenuHandler={showMobMenuHandler} showMobMenu={showMobMenu} />
      <div className={customHeader ? styles.containerCustom : styles.container}>
        <div className={styles.navLinks}>
          {
            customHeader ? null : (
              <div className={styles.reqBtn}>
                <a href="/store" className={styles.link}>{t("home-header-orderNow")}</a>
              </div>
            )
          }
          {
            customHeader ? null : (
              <HeaderIcons />
            )
          }
          {
            customHeader ? (
              <div className={styles.countriesList}>
                <div onClick={showCountriesMenuHandler} className={styles.selectedCountry}>
                  <span>{selectCountry}</span>
                  <BiChevronDown />
                </div>
                {
                  showCountriesMenu ? (
                    <ul onMouseLeave={()=>setShowCountriesMenu(false)} className={styles.countriesListMenu} style={i18n.dir() === "rtl" ? {left: 0} : {right: 0}}>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-KSA"))}>{t("home-header-country-KSA")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Jordan"))}>{t("home-header-country-Jordan")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-UAE"))}>{t("home-header-country-UAE")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Bahrien"))}>{t("home-header-country-Bahrien")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Kuwait"))}>{t("home-header-country-Kuwait")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Yemen"))}>{t("home-header-country-Yemen")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Qatar"))}>{t("home-header-country-Qatar")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Oman"))}>{t("home-header-country-Oman")}</li>
                      <li className={styles.item} onClick={() => chooseCountryHandler(t("home-header-country-Egypt"))}>{t("home-header-country-Egypt")}</li>
                    </ul>
                  ) : null
                }
              </div>
            ) : null
          }
          {/* {
            customHeader ? (
              <select className={styles.countriesList}>
                <option value="KSA" defaultChecked>{t("home-header-country-KSA")}</option>
                <option value="Jordan">{t("home-header-country-Jordan")}</option>
                <option value="UAE">{t("home-header-country-UAE")}</option>
                <option value="Bahrien">{t("home-header-country-Bahrien")}</option>
                <option value="Kuwit">{t("home-header-country-Kuwait")}</option>
                <option value="Yemen">{t("home-header-country-Yemen")}</option>
                <option value="Qatar">{t("home-header-country-Qatar")}</option>
                <option value="Oman">{t("home-header-country-Oman")}</option>
                <option value="Egypt">{t("home-header-country-Egypt")}</option>
              </select>
            ) : null
          } */}
        </div>
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>
            <img width={217} height={100} src={process.env.PUBLIC_URL + "/images/nescologo.png"} alt="" />
          </a>
          <button onClick={showMobMenuHandler} className={styles.menuBtn}>
            <FaBarsStaggered />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header