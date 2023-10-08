import styles from "./styles.module.scss";
import Input from "../Input/Input";
import useLogin from "../../../hooks/auth/useLogin";


const Login = () => {
  const [
    email,
    password,
    emailError,
    passwordError,
    onChangeEmail,
    onChangePassword,
    onSubmit
  ] = useLogin();

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>تسجيل الدخول</h1>
        <form className={styles.registerForm}>
          <Input 
            value={email}
            onChange={onChangeEmail}
            inputType="email"
            placeHolder="اكتب بريدك الالكتروني"
            errorMsg={emailError}
            forLogin={true}
          />
          <Input 
            value={password}
            onChange={onChangePassword}
            inputType="password"
            placeHolder="اكتب كلمة السر"
            errorMsg={passwordError}
            forLogin={true}
          />
          <div className={styles.bottomWrapper}>
            <button onClick={onSubmit} className={styles.registerBtn}>تسجيل الدخول</button>
            <a className={styles.forgetPasss} href="/forgetpassword">هل نسيت/نسيتي كلمة السر</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login