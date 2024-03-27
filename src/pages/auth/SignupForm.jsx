import React, { useState } from "react";
import GreyButton from "../../components/GreyButton";
import GreyTextField from "../../components/GreyTextField";
import { Grid } from "@mui/material";

const SignUpForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GreyTextField
            label="Email Address"
            name="email"
            type="email"
            value={user.email}
            onChange={(event) =>
              setUser((prev) => ({ ...prev, email: event.target.value }))
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <GreyTextField
            label="Name"
            name="name"
            type="text"
            value={user.name}
            onChange={(event) =>
              setUser((prev) => ({ ...prev, name: event.target.value }))
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <GreyTextField
            label="Password"
            name="password"
            type={"password"}
            value={user.password}
            onChange={(event) =>
              setUser((prev) => ({ ...prev, password: event.target.value }))
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <GreyButton variant="contained" type="submit" fullWidth>
            Sign Up
          </GreyButton>
          {/* <GoogleLoginButton /> */}
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
