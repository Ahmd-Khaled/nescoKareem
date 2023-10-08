import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/thunkActions/authActions";
import { resetSate } from "../../redux/slices/authSlice";

const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeEmail= (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (firstName === "") {
      setFirstNameError("الاسم الاول مطلوب");
      return;
    }
    // if (lastName === "") {
    //   setLastNameError("اسم العائله مطلوب");
    //   return;
    // }
    if (email === "") {
      setEmailError(" البريد الالكتروني مطلوب");
      return;
    }
    if (phone === "") {
      setPhoneError("رقم الهاتف مطلوب");
      return;
    }
    if (password === "") {
      setPasswordError("كلمة المرور مطلوبة");
      return;
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("تأكيد كلمة المرور مطلوب");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("كلمة المرور غير متطابقه")
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    validationValues();

    const newUserData = {
      name: `${firstName} ${lastName}`,
      email,
      mobile:phone,
      password,
      password_confirmation: confirmPassword,
      // fcm_token: 'fKDcMRWBRD2UHZ-o_BY-KI:APA91bHVgUZ4QabNTbc9ciCWnIq5Nr-ZBh0e3PHTR688IsNDnxAJv_-WP1wm4myYpgBStClY1pqT2Xz9oCixkNquSANH04SsTSSaOgDoONBzBdy5sjvXgMvdFEQwzZtZ1oh9DEdUmmg4'
    }
    console.log("newUserData:", newUserData);
    dispatch(createNewUser(newUserData));
  };

  const { signUp, isLoading, error} = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (isLoading === false) {
      if (typeof signUp === "object") {
        if (signUp["token"]) {
          localStorage.setItem("token", signUp["token"]);

          setFirstName("")
          setLastName("")
          setEmail("")
          setPhone("")
          setPassword("")
          setConfirmPassword("")

          dispatch(resetSate());

          setTimeout(() => {
            navigate('/login');
          }, 3000)
        }

        if (signUp.errors) {
          signUp.errors.map((err) => console.log(err.msg, "error"))
        }
      }
    }
  }, [isLoading]);

  return [
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
  ]
}

export default useRegister;



