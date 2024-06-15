// app/components/Navbar/navbar.tsx
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Typography,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import { FC } from "react";
import styles from "../../styles/navbar.module.scss";


const Navbar: FC = () => {
  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <Avatar alt="David Greymaax" src="/favicon.ico" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
