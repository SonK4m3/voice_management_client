import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { useDispatch } from "react-redux";
import { useLoginMutation, useSignupMutation } from "../../state/api";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import ToastMessageResponse from "./ToastMessageResponse";
import { isTokenExpired, parseJWT } from "../../utils/parse";

const initialToaseMessage = {
  show: false,
  severity: "",
  message: "",
};

const Auth = () => {
  const { palette } = useTheme();

  const [signUp, setSignUp] = useState(false);
  const [toastMessage, setToastMessage] = useState(initialToaseMessage);

  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const loginResult = await login({ email, password }).unwrap();
      if (loginResult.accessToken.length > 0) {
        showToastMessageResponse({
          severity: "success",
          message: "Login successful",
        });

        dispatch(authActions.loginSuccess(loginResult));
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (err) {
      if (err.status === 401) {
        showToastMessageResponse({
          severity: "error",
          message: err.data.message,
        });
      } else {
        showToastMessageResponse({
          severity: "error",
          message: "internal error " + err,
        });
      }
    }
  };

  const handleSignUp = async (user) => {
    try {
      const signupResult = await signup({ ...user, role: "user" }).unwrap();
      if (signupResult.accessToken.length > 0) {
        showToastMessageResponse({
          severity: "success",
          message: "Register successful",
        });
        dispatch(authActions.loginSuccess(signupResult));
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (err) {
      if (err.status === 400) {
        showToastMessageResponse({
          severity: "error",
          message: "Fields be must match format",
        });
      } else if (err.status === 500) {
        showToastMessageResponse({
          severity: "error",
          message: "Email has been registered",
        });
      } else {
        showToastMessageResponse({
          severity: "error",
          message: "internal error " + err,
        });
      }
    }
  };

  const showToastMessageResponse = ({ severity, message }) => {
    setToastMessage({
      show: true,
      severity: severity,
      message: message,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userPayload = parseJWT(token);

    if (token && !isTokenExpired(userPayload)) {
      navigate("/dashboard");
    }
  });

  return (
    <Box width="100%" height="100%">
      <ToastMessageResponse
        toastMessageResponse={toastMessage}
        onClose={() => {
          setToastMessage(initialToaseMessage);
        }}
      />
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
            padding: "5px",
          }}
        >
          <Box p={3}>
            <Typography
              variant="h3"
              style={{
                color: palette.grey[700],
              }}
            >
              {signUp ? "SignUp" : "Login"}
            </Typography>
          </Box>
          {signUp ? (
            <SignUpForm onSubmit={handleSignUp} />
          ) : (
            <LoginForm onSubmit={handleLogin} />
          )}
          <Box p={3}>
            <Typography
              variant="caption"
              style={{
                color: palette.grey[700],
                cursor: "pointer",
                "&:hover": {
                  color: palette.grey[500],
                },
              }}
              onClick={() => setSignUp((prev) => !prev)}
            >
              {signUp ? "Go to Login" : "Go to Sign up"}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Auth;
