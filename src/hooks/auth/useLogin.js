import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/thunkActions/authActions";
import { resetSate } from "../../redux/slices/authSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail= (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (email === "") {
      setEmailError(" البريد الالكتروني مطلوب");
      return;
    }
    if (password === "") {
      setPasswordError("كلمة المرور مطلوبة");
      return;
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    validationValues();

    const loginData = {
      email,
      password,
    }
    dispatch(logIn(loginData))
  };

  const { signIn, isLoading, error } = useSelector((state) => state.authSlice);
  
  console.log("signIn", signIn);
  console.log("isLoading", isLoading);
  console.log("error", error);


  useEffect(() => {
    if (isLoading === false) {
      if (typeof signIn === "object") {
        if (signIn["token"]) {
          localStorage.setItem("token", signIn["token"]);
          localStorage.setItem("userData", JSON.stringify(signIn["data"]));

          setEmail("")
          setPassword("")

          dispatch(resetSate());

          setTimeout(() => {
            navigate('/');
          }, 3000);

        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
        }
        if (signIn["message"] === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
        }
        if (error) {
          if (error.code === "ERR_BAD_REQUEST") {
          }
        }
      }
    }
  }, [isLoading]);


  return [
    email,
    password,
    emailError,
    passwordError,
    onChangeEmail,
    onChangePassword,
    onSubmit
  ];
}

export default useLogin;