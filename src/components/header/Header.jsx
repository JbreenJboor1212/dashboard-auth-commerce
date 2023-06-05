/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";
import "./header.css";
import { useContext } from "react";
import { Data } from "../../page/context/Context";

const Header = () => {
  const { cartItemsLength } = useContext(Data);

  const cookie = new Cookies();

  const token = cookie.get("Barer");

  /*!-------- Log Out ---------- */
  const logOut = async () => {
    await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    cookie.remove("Barer");
    window.location.pathname = "/";
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="child-child">
          <div className="one">
            <i className="bi bi-house home-icon"></i>
          </div>
          <div className="two">
            <Link className="child-child-child" to={"/"}>
              Home
            </Link>
            <Link className="child-child-child" to={"/about"}>
              About
            </Link>
            <Link className="child-child-child" to={"/authors"}>
              Authors
            </Link>
            <Link className="child-cart" to={"/cart"}>
              <span className="num-span">
                <i className="bi bi-bag-fill"></i>
                <span className="num-span-span">{cartItemsLength}</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="child-child-button">
          {!token ? (
            <>
              <Link className="button" to={"/login"}>
                Login
              </Link>
              <Link className="button" to={"/register"}>
                Register
              </Link>
            </>
          ) : (
            <>
              <Link className="button" to={"/dashboard"}>
                Dashboard
              </Link>
              <div className="button" onClick={logOut}>
                LogOut
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
