import React, { useState } from "react";
import { Box, useMediaQuery, useTheme, Button } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import MessageBoxWithButton from "./MessageBoxWithButton";
import {
  useGetAdminParamByIdQuery,
  useGetParamByIdQuery,
} from "../../state/api";

const Dashboard = () => {
  // const isAboutMediumScreens = useMediaQuery("(min-width: 1200px");
  // const { palette } = useTheme();

  const { data, error, refetch } = useGetAdminParamByIdQuery({
    ids: 123,
    id: 456,
  });

  const getParam = useGetParamByIdQuery({
    ids: 123,
    id: 456,
  });

  const onButtonClickAdmin = async () => {
    try {
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const onButtonClick = async () => {
    try {
      getParam.refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem">
      <DashboardBox>
        <MessageBoxWithButton
          key="user-foo"
          message={JSON.stringify(getParam.data)}
          buttonText="Foo with user"
          onButtonClick={onButtonClick}
        />
      </DashboardBox>
      <DashboardBox>
        <MessageBoxWithButton
          key="admin-foo"
          message={JSON.stringify(
            data || { message: "user is not allowed to get this api" }
          )}
          buttonText="Foo with admin"
          onButtonClick={onButtonClickAdmin}
        />
      </DashboardBox>
    </Box>
  );
};

export default Dashboard;
