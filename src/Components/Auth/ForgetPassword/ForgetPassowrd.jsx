import styles from "./styles.module.scss";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";



const ForgetPassowrd = () => {
    const {t}=useTranslation()
  return (
    <div className={styles.registerPage}>
    <div className={styles.registerPage__wrapper}>
      <h1 className={styles.title}>{t('reset-text-1')}</h1>
      <form className={styles.registerForm}>
        <Input 
          inputType="email"
          placeHolder={t('reset-text-1')}
          forLogin={true}
        />

        <div className={styles.bottomWrapper}>
          <button className={styles.registerBtn}> {t('reset-text-1')} </button>
        </div>
      </form>
    </div>
  </div>

    )
}

export default ForgetPassowrd