import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

function UserData({ user, queryString, params }) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="grey">
        User Information
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">User ID:</Typography>
              <Typography>{user.id}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Email:</Typography>
              <Typography>{user.email}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Name:</Typography>
              <Typography>{user.name}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Role:</Typography>
              <Typography>{user.role}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Token Issue Time:</Typography>
              <Typography>
                {new Date(user.iat * 1000).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Token Expiry Time:</Typography>
              <Typography>
                {new Date(user.exp * 1000).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Additional Information
              </Typography>
              <Typography variant="subtitle1">Query String:</Typography>
              <Typography>{queryString}</Typography>
              <Typography variant="subtitle1">Params:</Typography>
              <Typography>{JSON.stringify(params)}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserData;
