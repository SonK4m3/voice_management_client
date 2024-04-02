import React from "react";
import { Box } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import MessageBoxWithButton from "./MessageBoxWithButton";
import {
  useGetAdminParamByIdQuery,
  useGetParamByIdQuery,
} from "../../state/api";

const Dashboard = () => {
  // const isAboutMediumScreens = useMediaQuery("(min-width: 1200px");
  // const { palette } = useTheme();

  const getAdminParam = useGetAdminParamByIdQuery({
    ids: 123,
    id: 456,
  });

  const getParam = useGetParamByIdQuery({
    ids: 123,
    id: 456,
  });

  const onButtonClickAdmin = () => {
    getAdminParam.refetch();
  };

  const onButtonClick = () => {
    getParam.refetch();
  };

  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem">
      <DashboardBox>
        <MessageBoxWithButton
          key="user-foo"
          queryResult={getParam}
          buttonText="Foo with user"
          onButtonClick={onButtonClick}
        />
      </DashboardBox>
      <DashboardBox>
        <MessageBoxWithButton
          key="admin-foo"
          queryResult={getAdminParam}
          buttonText="Foo with admin"
          onButtonClick={onButtonClickAdmin}
        />
      </DashboardBox>
    </Box>
  );
};

export default Dashboard;
