import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Subscribe = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__ask}>
        <p className={styles.text}>{t("home-subscribe-question")}</p>
      </div>
      <form className={styles.subscribe__form}>
        <input type="text" name="email" placeholder={t("home-subscribe-inputPlaceholder")} />
        <button className={styles.subscribeBtn}>{t("home-subscribe-subscribe")}</button>
      </form>
    </section>
  )
}

export default Subscribe;