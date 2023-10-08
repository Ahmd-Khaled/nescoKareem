import styles from "./styles.module.scss";

const Input = ({ value, onChange, label, labelId, inputType, placeHolder, errorMsg, isEmpty, forLogin }) => {
  return (
    <div className={forLogin ? styles.inputBoxLogin : styles.inputBox}>
      {label ? <label className={styles.label} htmlFor={labelId}>{label}</label> : null}
      <input
        value={value}
        onChange={onChange}
        className={isEmpty ? styles.inputEmpty : styles.input}
        type={inputType}
        placeholder={placeHolder} 
      />
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default Input