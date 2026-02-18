import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";
import App from "App";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import * as React from "react";

export default function Main(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const items = [
    { label: "Home", icon: <HomeIcon />, relativePath: "/" },
    { label: "Career", icon: <WorkIcon />, relativePath: "/career" },
    { label: "Projects", icon: <FolderIcon />, relativePath: "/projects" },
    { label: "Hobbies", icon: <TheaterComedyIcon />, relativePath: "/hobbies" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {items.map(({ label, icon, relativePath }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component={Link} to={relativePath}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            About me
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <App />
    </>
  );
}
