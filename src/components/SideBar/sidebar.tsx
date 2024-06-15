"use client";

import React, { FC, useState } from "react";
import {
  Home,
  Settings,
  Description,
  List,
  Dashboard,
  InsertDriveFile,
  People,
  Error,
  HelpOutline,
  ShoppingCart,
} from "@mui/icons-material";
import {
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Typography,
} from "@mui/material";
import { Trans } from "react-i18next";
import styles from '../../styles/sidebar.module.scss'

interface OpenState {
  basicUiMenuOpen: boolean;
  formElementsMenuOpen: boolean;
  tablesMenuOpen: boolean;
  iconsMenuOpen: boolean;
  chartsMenuOpen: boolean;
  userPagesMenuOpen: boolean;
  errorPagesMenuOpen: boolean;
  generalPagesMenuOpen: boolean;
  ecommercePagesMenuOpen: boolean;
}

const menuItems = [
  {
    key: "basicUiMenuOpen",
    icon: <List />,
    label: <Trans>Basic UI Elements</Trans>,
    subItems: [
      <Trans>Buttons</Trans>,
      <Trans>Dropdowns</Trans>,
      <Trans>Typography</Trans>,
    ],
  },
  {
    key: "formElementsMenuOpen",
    icon: <Description />,
    label: <Trans>Form Elements</Trans>,
    subItems: [<Trans>Basic Elements</Trans>],
  },
  {
    key: "tablesMenuOpen",
    icon: <InsertDriveFile />,
    label: <Trans>Tables</Trans>,
    subItems: [<Trans>Basic Table</Trans>],
  },
  {
    key: "iconsMenuOpen",
    icon: <People />,
    label: <Trans>Icons</Trans>,
    subItems: [<Trans>Material</Trans>],
  },
  {
    key: "chartsMenuOpen",
    icon: <InsertDriveFile />,
    label: <Trans>Charts</Trans>,
    subItems: [<Trans>Chart Js</Trans>],
  },
  {
    key: "userPagesMenuOpen",
    icon: <People />,
    label: <Trans>User Pages</Trans>,
    subItems: [
      <Trans>Login</Trans>,
      <Trans>Register</Trans>,
      <Trans>Lockscreen</Trans>,
    ],
  },
  {
    key: "errorPagesMenuOpen",
    icon: <Error />,
    label: <Trans>Error Pages</Trans>,
    subItems: ["404", "500"],
  },
  {
    key: "generalPagesMenuOpen",
    icon: <HelpOutline />,
    label: <Trans>General Pages</Trans>,
    subItems: [<Trans>Blank Page</Trans>],
  },
];

const Sidebar: FC = () => {
  const [open, setOpen] = useState<OpenState>({
    basicUiMenuOpen: false,
    formElementsMenuOpen: false,
    tablesMenuOpen: false,
    iconsMenuOpen: false,
    chartsMenuOpen: false,
    userPagesMenuOpen: false,
    errorPagesMenuOpen: false,
    generalPagesMenuOpen: false,
    ecommercePagesMenuOpen: false,
  });

  const toggleMenuState = (menu:boolean) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [menu]: !prevOpen[menu],
    }));
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.navProfile}>
        <Avatar
          alt="David Greymaax"
          src="/favicon.ico"
          className={styles.avatar}
        />
        <div>
          <Typography variant="subtitle1">
            <Trans>David Grey. H</Trans>
          </Typography>
          <Typography variant="body2">
            <Trans>Project Manager</Trans>
          </Typography>
        </div>
      </div>
      <MuiList>
        <ListItem button>
          <ListItemText primary={<Trans>Dashboard</Trans>} />
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
        </ListItem>
        {menuItems.map((item) => (
          <React.Fragment key={item.key}>
            <ListItem button onClick={() => toggleMenuState(item.key)}>
              <ListItemText primary={item.label} />
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
            <Collapse in={open[item.key]} timeout="auto" unmountOnExit>
              <MuiList component="div" disablePadding>
                {item.subItems.map((subItem, index) => (
                  <ListItem button key={index}>
                    <ListItemText inset primary={subItem} />
                  </ListItem>
                ))}
              </MuiList>
            </Collapse>
          </React.Fragment>
        ))}
        <ListItem button>
          <ListItemText primary={<Trans>Documentation</Trans>} />
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
        </ListItem>
      </MuiList>
    </nav>
  );
};

export default Sidebar;
