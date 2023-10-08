import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.offers}>
      <div className={styles.offers__container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1>{t("home-offers-franchisingLicensing")}</h1>
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>{t("home-offers-franchisingLicensingTxt")}</p>
            <button className={styles.reqNowBtn}>
              <span>{t("home-offers-requestNow")}</span>
              <BsChevronLeft />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h1>{t("home-offers-companiesRequest")}</h1>
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>{t("home-offers-companiesRequestTxt")}</p>
            <button className={styles.reqNowBtn}>
              <span>{t("home-offers-requestNow")}</span>
              <BsChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers;