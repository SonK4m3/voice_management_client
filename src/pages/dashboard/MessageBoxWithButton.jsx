import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UserProfile from "./UserProfile";
import CircularProgress from "@mui/material/CircularProgress";

const MessageBoxWithButton = ({ queryResult, buttonText, onButtonClick }) => {
  const { data, isLoading, error } = queryResult;
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {data?.user ? (
        <>
          <Box
            bgcolor="grey.main"
            color="primary.contrastText"
            p={2}
            m={2}
            sx={{ borderRadius: "16px" }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <UserProfile
                params={data.params}
                user={data.user}
                queryString={data.queryString}
              />
            )}
          </Box>

          <Box>
            <Button variant="contained" color="primary" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </Box>
        </>
      ) : (
        <Box
          bgcolor="grey.main"
          color="primary.contrastText"
          p={2}
          m={2}
          sx={{ borderRadius: "16px" }}
        >
          {error
            ? error?.status === 500
              ? "User not allowed access this route"
              : "Please login to access this route !"
            : "Please login to access this route !"}
        </Box>
      )}
    </Box>
  );
};

export default MessageBoxWithButton;
