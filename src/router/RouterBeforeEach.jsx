import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkRouterAuth } from "./index";
import { useEffect, useState } from "react";
const RouterBeforeEach = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  const token = useSelector((state) => {
    return state.user.token
  });
  useEffect(() => {
    let obj = checkRouterAuth(location.pathname);
    if (obj && obj.auth && !token) {
      setAuth(false);
      navigate("/login", { replace: true });
    } else {
      setAuth(true);
      if (obj.redirect) {
        navigate(obj.redirect, { replace: true });
      }
    }
  }, [location.pathname, token, navigate]);
  return auth ? <Outlet /> : null;
};

export default RouterBeforeEach;
