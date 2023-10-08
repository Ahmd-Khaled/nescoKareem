import React from 'react'
import styles from "./styles.module.scss";
import Input from "../Input/Input";
import { useTranslation } from 'react-i18next';


const ResetPassword = () => {
 
    const {t}=useTranslation()
    return (
      <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>{t('reset-text-4')}</h1>
        <form className={styles.registerForm}>
          <Input 
    
            inputType="email"
            placeHolder={t('reset-text-5')}
            forLogin={true}
          />
  

  <Input 
  
            inputType="password"
            placeHolder={t('reset-text-6')}
            forLogin={true}
          />


<Input 
          
            inputType="password"
            placeHolder={t('reset-text-7')}
            forLogin={true}
          />


          <div className={styles.bottomWrapper}>
            <button className={styles.registerBtn}> {t('reset-text-8')} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword