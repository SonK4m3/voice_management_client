import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const isAdmin = true;

  return <Outlet />;
};

export default AdminRoutes;
