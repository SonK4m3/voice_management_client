import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { isTokenExpired, isValidToken, parseJWT } from "../utils/parse";
import { authActions } from "../store/authSlice";

const PublicRoute = ({ element, ...rest }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (isValidToken(token)) {
      const userPayload = parseJWT(token);
      if (!isTokenExpired(userPayload)) {
        dispatch(authActions.relogin({ accessToken: token }));
      }

      const checkTokenExpiration = () => {
        if (isTokenExpired(userPayload)) {
          dispatch(authActions.logout());
        }
      };

      const tokenCheckInterval = setInterval(checkTokenExpiration, 1000);

      return () => clearInterval(tokenCheckInterval);
    }
  }, [dispatch]);

  return <Outlet />;
};

export default PublicRoute;
