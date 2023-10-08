import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
// import NavigationDots from "../NavigationDots/NavigationDots";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.about}>
      <div className={styles.about__images}>
        <div className={styles.imageOne}>
          <div className={styles.imageOne__gif}>
            <img src={process.env.PUBLIC_URL + "/images/gifcoffee_beans.gif"} alt="" />
          </div>
          <div className={styles.imageOne__timeLine}>
            <div className={styles.info}>
              <p className={styles.txt}>{t("home-about-since")}</p>
              <h1 className={styles.title}>1992</h1>
              <p className={styles.desc}>{t("home-about-desc")}</p>
            </div>
            <div className={styles.start}>
              <img className={styles.sliderImg} width={61} height={108} src={process.env.PUBLIC_URL + "/images/slide-icon.png"} alt="" />
              <img className={styles.handImg} width={65} height={61} src={process.env.PUBLIC_URL + "/images/hand-flipped.png"} alt="" />
            </div>
            <div className={styles.startDate}>2023</div>
            <div className={styles.lineVertOne}></div>
          </div>
        </div>
        <div className={styles.imageTwo}>
          <div className={styles.imageTwo__gif}>
            <img src={process.env.PUBLIC_URL + "/images/powder-coffee-ar.gif"} alt="" />
          </div>
          <div className={styles.imageTwo__timeLine}>
            <div className={styles.step}>
              <h1 className={styles.mainTitle}>{t("home-about-spilling")}</h1>
              <h1 className={styles.subTitle}>{t("home-about-flavour")}</h1>
              <p className={styles.text}>{t("home-about-flavourTxt")}</p>
              <a className={styles.discoverBtn} href="/discover">{t("home-about-discover")}</a>
            </div>
            <div className={styles.lineVertTwo}></div>
          </div>
        </div>
        <div className={styles.imageThree}>
          <div className={styles.imageThree__gif}>
            <img src={process.env.PUBLIC_URL + "/images/coffee-cup-ar.gif"} alt="" />
          </div>
          <div className={styles.imageThree__timeLine}>
            <div className={styles.step}>
              <h1 className={styles.mainTitle}>{t("home-about-siptoLove")}</h1>
              <p className={styles.text}>{t("home-about-sipTxt")}</p>
              <a className={styles.discoverBtn} href="/more">{t("home-about-more")}</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
      </div>
      {/* <NavigationDots /> */}
    </section>
  )
}

export default About;