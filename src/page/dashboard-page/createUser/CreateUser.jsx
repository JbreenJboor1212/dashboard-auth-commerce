import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";
import "./CreateUser.css";
import { Data } from "../../context/Context";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [accept, setAccept] = useState("");
  const [emailError, setEmailError] = useState("");

  const allData = useContext(Data);
  const token = allData.auth.token;

  const nav = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/user/create`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: cPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            accept: "application/json",
          },
        }
      );
      nav("/dashboard/users");
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      setAccept(true);
    }
  };

  return (
    <div className="create-user">
      <div className="card-create-user">
        <form className="form" onSubmit={submitHandle}>
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
            {name.length < 1 && accept ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
            )}
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && accept ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
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
            {password.length < 8 && accept ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
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
            {password !== cPassword && accept ? (
              <i className="bi bi-x icons false"></i>
            ) : (
              <i className="bi bi-check2-all icons true"></i>
            )}
          </div>
          <div className="input last">
            <button type="submit" onSubmit={submitHandle}>
              Create Users
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
