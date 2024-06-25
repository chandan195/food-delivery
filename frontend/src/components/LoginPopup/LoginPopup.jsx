import React, { useState } from "react";
import "./LoginPupup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setTokenValue } from "../../store/slice/CardSlice";

const LoginPopup = ({ setShowLogin, setToken }) => {
  // const dispatch = useDispatch();
  const [currState, setCurrState] = useState("Login");
  const url = "http://localhost:4000";
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl = `${url}/api/user/login`;
       console.log(newUrl);
    } else {
      newUrl = `${url}/api/user/register`;
       console.log(newUrl);
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      console.log(response.data.message);
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross "
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="your name"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing ,i agree to the tern of usr & policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have a account ?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
