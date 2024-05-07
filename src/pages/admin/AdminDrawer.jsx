import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../store/drawerSlice";
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import CloseIcon from "@mui/icons-material/Close";

const DrawerNestedListItem = ({ header, children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        {header}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
};

const DrawerListItem = ({
  sx = [],
  toPage,
  primary,
  isSelect,
  handleClick,
}) => {
  return (
    <ListItemButton
      sx={[
        {
          borderRadius: "14px",
          padding: "4px 10px 4px 12px",
          border: "1px solid",
          borderColor: "#24292e",
        },
        ...(isSelect === toPage
          ? [
              {
                backgroundColor: "darkPallete.blue",
                "&:hover": {
                  backgroundColor: "darkPallete.blue",
                },
              },
            ]
          : [
              {
                "&:hover": {
                  borderColor: "white",
                },
              },
            ]),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      component={Link}
      to={toPage}
      onClick={() => {
        handleClick(toPage);
      }}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

const AdminDrawer = () => {
  const [isSelect, setIsSelect] = React.useState("");
  const { isDrawerOpen } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const drawerRef = React.useRef(null);

  const handleClick = (value) => {
    setIsSelect(value);
    dispatch(closeDrawer());
  };

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        dispatch(closeDrawer());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <Drawer
      id="drawer"
      variant="persistent"
      sx={{
        width: "200px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "256px",
          backgroundColor: "#24292e",
          color: "#c9d1d9",
          borderRight: "none",
        },
      }}
      open={isDrawerOpen}
      ref={drawerRef}
    >
      <List>
        <FlexBetween p={1}>
          <PixIcon sx={{ fontSize: "40px" }} />
          <IconButton
            aria-label="close drawer"
            color="primary"
            onClick={() => dispatch(closeDrawer())}
          >
            <CloseIcon />
          </IconButton>
        </FlexBetween>
        <Box sx={{ padding: "10px 24px 0px 12px" }}>
          <DrawerListItem
            toPage="profile"
            primary="Profile"
            isSelect={isSelect}
            handleClick={handleClick}
          />
          <DrawerNestedListItem
            header={
              <>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Access" />
              </>
            }
          >
            <DrawerListItem
              sx={{ pl: 4 }}
              toPage="permission"
              primary="Permissions"
              isSelect={isSelect}
              handleClick={handleClick}
            />
            <DrawerListItem
              sx={{ pl: 4 }}
              toPage="role"
              primary="Roles"
              isSelect={isSelect}
              handleClick={handleClick}
            />
          </DrawerNestedListItem>
        </Box>
      </List>
    </Drawer>
  );
};

export default AdminDrawer;
