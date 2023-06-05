import { useContext, useEffect, useState } from "react";
import "./UpdateUser.css";
import { Data } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpDateUser = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const context = useContext(Data);
  const token = context.auth.token;

  const [name, setNameNew] = useState("");
  const [email, setEmailNew] = useState("");

  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmailNew(data[0].email);
        setNameNew(data[0].name);
      });
  }, [id]);

  const submitHandle = async (e) => {
    e.preventDefault();

    setAccept(true);

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/user/update/${id}`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: cPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
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
    <div className="user-update" >
      <div className="card-update">
        <form className="form" onSubmit={submitHandle}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username..."
              value={name}
              onChange={(e) => {
                setNameNew(e.target.value);
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
                setEmailNew(e.target.value);
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
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpDateUser;
