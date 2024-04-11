import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired, isValidToken, parseJWT } from "../utils/parse";
import { authActions } from "../store/authSlice";

const PrivateRoute = ({ element, ...rest }) => {
  const auth = useSelector((state) => state.auth);
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

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
