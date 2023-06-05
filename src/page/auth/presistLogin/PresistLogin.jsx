import { useContext } from "react";
import { useState } from "react";
import { Data } from "../../context/Context";
import { Cookies } from "react-cookie";
import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const PersistLogin = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(Data);
  const token = context.auth.token;
  const cookie = new Cookies();
  const getToken = cookie.get("Barer");

  useEffect(() => {
    const refresh = () => {
      try {
        axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: "Bearer " + getToken,
              Accept: "application/json",
            },
          })
          .then((data) => {
            cookie.set("Barer", data.data.token);
            context.setAuth((prev) => {
              return {
                userDetails: data.data.user,
                token: data.data.token,
              };
            });
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    !token ? refresh() : setLoading(true);
  }, []);

  return !loading ? <Loader /> : <Outlet />;
};

export default PersistLogin;
