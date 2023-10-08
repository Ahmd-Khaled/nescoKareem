import styles from "./styles.module.scss";
import Input from "../Input/Input";
import useRegister from "../../../hooks/auth/useRegister";


const Register = () => {
  const [
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    onChangeFirstName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    firstNameError,
    emailError,
    phoneError,
    passwordError,
    confirmPasswordError,
    onSubmit
  ] = useRegister();

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>تسجيل حساب جديد</h1>
        <form className={styles.registerForm}>
          <Input 
            value={firstName}
            onChange={onChangeFirstName}
            inputType="text"
            placeHolder="الاسم الاول *"
            errorMsg={firstNameError}
          />
          <Input 
            value={lastName}
            onChange={onChangeLastName}
            inputType="text"
            placeHolder="اسم العائلة"
          />
          <Input 
            value={phone}
            onChange={onChangePhone}
            inputType="text"
            placeHolder="رقم الموبايل"
            errorMsg={phoneError}
          />
          <Input 
            value={email}
            onChange={onChangeEmail}
            inputType="email"
            placeHolder="البريد الالكتروني"
            errorMsg={emailError}
          />
          <Input 
            value={password}
            onChange={onChangePassword}
            inputType="password"
            placeHolder="كلمة السر"
            errorMsg={passwordError}
          />
          <Input 
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            inputType="password"
            placeHolder="اعادة كلمة السر"
            errorMsg={confirmPasswordError}
          />
          <div className={styles.bottomWrapper}>
            <div className={styles.terms}>
              <input type="checkbox" />
              <label>لقد قرأت وقبلت <a href="/terms">الشروط والأحكام</a></label>
            </div>
            <div className={styles.hearOurNews}>
              <input type="checkbox" />
              <label>ﻫﻞ ﺗﺮﻳﺪ أن ﺗﺴﻤﻊ أﺧﺒﺎرﻧﺎ</label>
            </div>
            <button onClick={onSubmit} className={styles.registerBtn}>تسجيل</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register


