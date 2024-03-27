import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { useDispatch } from "react-redux";
import { useLoginMutation, useSignupMutation } from "../../state/api";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

import { Box, Container, Paper, Typography, useTheme } from "@mui/material";

const Auth = () => {
  const { palette } = useTheme();

  const [signUp, setSignUp] = useState(false);

  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const loginResult = await login({ email, password }).unwrap();
      if (loginResult.token.length > 0) {
        dispatch(authActions.loginSuccess(loginResult));
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async (user) => {
    try {
      const signupResult = await signup({ ...user, role: "user" }).unwrap();
      if (signupResult.token.length > 0) {
        dispatch(authActions.loginSuccess(signupResult));
        navigate("/dashboard");
      } else {
        alert("Register failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width="100%" height="100%">
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
