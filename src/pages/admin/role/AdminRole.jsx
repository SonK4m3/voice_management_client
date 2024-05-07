import React, { useState } from "react";
import UnderlineTypography from "../../../components/typography/UnderlineTypography";
import DashboardBox from "../../../components/DashboardBox";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
  Divider,
  Pagination,
  Collapse,
} from "@mui/material";
import RoleManager from "./RoleManager";
import BorderRoundedBox from "../../../components/BorderRoundedBox";
import GreenGradientPaper from "../../../components/GreenGradientPaper";

const UserList = ({ users, deleteUser, editUser }) => {
  const [page, setPage] = useState(1);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const usersPerPage = 3;
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = page * usersPerPage;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleExpand = (userId) => {
    setExpandedUserId(userId === expandedUserId ? null : userId);
  };
  return (
    <>
      <List>
        {users.slice(startIndex, endIndex).map((user, index) => (
          <React.Fragment key={user.id}>
            <ListItem>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={user.email}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleExpand(user.id)}
                >
                  {user.id === expandedUserId ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  color="error"
                  onClick={() => deleteUser(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Collapse
              sx={{
                paddingLeft: "24px",
              }}
              in={user.id === expandedUserId}
              timeout="auto"
              unmountOnExit
            >
              <Box margin={1}>
                <Typography variant="subtitle1" gutterBottom>
                  More Details:
                </Typography>
                <Typography variant="body1">
                  Date of Birth: {user.dateOfBirth}
                </Typography>
                <Typography variant="body1">Address: {user.address}</Typography>
                {/* Add more user details here */}
              </Box>
            </Collapse>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Pagination
        count={Math.ceil(users.length / usersPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
};

const AdminRole = () => {
  const [users, setUsers] = useState(USERS);
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  };

  return (
    <Box width="100%" height="100%">
      <GreenGradientPaper>
        <UnderlineTypography variant="h1" width="100%" color="white">
          Vị trí
        </UnderlineTypography>
      </GreenGradientPaper>
      <BorderRoundedBox
        p={3}
        mt={1}
        sx={{
          color: "white",
        }}
      >
        <RoleManager />
      </BorderRoundedBox>
      <DashboardBox mt={1}>
        <Box bgcolor="white" p={1}>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </Box>
      </DashboardBox>
    </Box>
  );
};

export default AdminRole;

const USERS = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
  { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@example.com" },
  { id: 3, firstName: "Alice", lastName: "Smith", email: "alice@example.com" },
  { id: 4, firstName: "Bob", lastName: "Smith", email: "bob@example.com" },
  { id: 5, firstName: "Eve", lastName: "Johnson", email: "eve@example.com" },
  {
    id: 6,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael@example.com",
  },
  { id: 7, firstName: "Emily", lastName: "Davis", email: "emily@example.com" },
  {
    id: 8,
    firstName: "Daniel",
    lastName: "Wilson",
    email: "daniel@example.com",
  },
  {
    id: 9,
    firstName: "Olivia",
    lastName: "Martinez",
    email: "olivia@example.com",
  },
  {
    id: 10,
    firstName: "David",
    lastName: "Taylor",
    email: "david@example.com",
  },
];
