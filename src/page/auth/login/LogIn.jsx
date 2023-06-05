import { useContext, useState } from "react";
import Header from "../../../components/header/Header";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { Data } from "../../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);

  const [errorPassword, setErrorPassword] = useState(false);

  const [accept, setAccept] = useState(false);

  const nav = useNavigate();

  const dataAll = useContext(Data);

  const cookie = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccept(true);

    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: email,

        password: password,
      });

      const token = res.data.data.token;

      cookie.set("Barer", token);

      const userDetails = res.data.data.user;

      dataAll.setAuth({ token, userDetails });

      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 422) {
        setErrorPassword(true);
      }

      if (err.response.status === 401) {
        setErrorEmail(true);
      }

      setAccept(true);
    }
  };

  return (
    <>
      <Header />
      <div className="login" onSubmit={handleSubmit}>
        <div className="card-login">
          <form className="form">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorEmail && accept && <p>*Email not found.</p>}
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {accept && errorPassword && (
                <p>*The password must be at least 6 characters.</p>
              )}
            </div>
            <div className="input last">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
