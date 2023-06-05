import axios from "axios";
import { useContext, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/Header";
import { Data } from "../../context/Context";

import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmailName] = useState("");

  const [password, setPassword] = useState("");

  const [cPassword, setCPassword] = useState("");

  const [accept, setAccept] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const nav = useNavigate();

  const dataAll = useContext(Data);

  const cookie = new Cookies();

  const submitHandle = async (e) => {
    e.preventDefault();

    setAccept(true);

    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        name: name,

        email: email,

        password: password,

        password_confirmation: cPassword,
      });

      const token = res.data.data.token;

      cookie.set("Barer", token);

      const userDetails = res.data.data.user;

      dataAll.setAuth({ token, userDetails });

      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      setAccept(true);
    }
  };

  return (
    <>
      <Header />
      <div className="register" onSubmit={submitHandle}>
        <div className="card-register">
          <form className="form">
            <div className="input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {name.length < 1 && accept && <p>*the name is short.</p>}
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => {
                  setEmailName(e.target.value);
                }}
              />
              {emailError && accept && (
                <p>*The email has already been taken. </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {password.length < 8 && accept && (
                <p>*the password is less than 8.</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="CPassword">Confirm Password</label>
              <input
                type="password"
                id="CPassword"
                placeholder="Confirm Password..."
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              {password !== cPassword && accept && (
                <p>*the password not equal confirm P.</p>
              )}
            </div>
            <div className="input last">
              <button type="submit" onSubmit={submitHandle}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
