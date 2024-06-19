"use client";

import React, { useState, useEffect } from 'react';
import { styled, useTheme, Theme, CSSObject, alpha } from "@mui/material/styles";
import {
  AppBarProps as MuiAppBarProps,
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  Menu,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Collapse,
  MenuItem
} from "@mui/material";
import { Avatar } from "@mui/material";
import { Trans } from "react-i18next";
import Badge from "@mui/material/Badge";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Cached, Logout } from "@mui/icons-material";
import face1 from "../../assets/images/faces/face1.jpg"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Inbox as InboxIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "../../styles/navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";

import BasicUiIcon from "@mui/icons-material/GpsFixedSharp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TableIcon from "@mui/icons-material/BackupTableSharp";
import ContactsIcon from "@mui/icons-material/Contacts";
import ChartBarIcon from "@mui/icons-material/Addchart";
import MedicalBagIcon from "@mui/icons-material/MedicalServices";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const MenuItems = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/dashboard",
  },

  {
    title: "Basic UI Elements",
    icon: <BasicUiIcon />,
    path: "/basic-ui",
    subMenu: [
      { title: "Buttons", path: "/basic-ui/buttons" },
      { title: "Dropdowns", path: "/basic-ui/dropdowns" },
      { title: "Typography", path: "/basic-ui/typography" },
    ],
  },
  {
    title: "Form Elements",
    icon: <MailIcon />,
    path: "/form-elements",
    subMenu: [
      { title: "Basic Elements", path: "/form-elements/basic-elements" },
    ],
  },
  {
    title: "Icons",
    icon: <ContactsIcon />,
    path: "/icons",
    subMenu: [{ title: "Material", path: "/icons/mdi" }],
  },
  {
    title: "Charts",
    icon: <ChartBarIcon />,
    path: "/charts",
    subMenu: [{ title: "Chart Js", path: "/charts/chart-js" }],
  },
  {
    title: "Tables",
    icon: <TableIcon />,
    path: "/tables",
    subMenu: [{ title: "Basic Table", path: "/tables/basic-table" }],
  },
  {
    title: "Sample Pages",
    icon: <MedicalBagIcon />,
    path: "/sample-pages",
    subMenu: [
      { title: "Login", path: "/user-pages/login-1" },
      { title: "Register", path: "/user-pages/register-1" },
      { title: "404", path: "/error-pages/error-404" },
      { title: "500", path: "/error-pages/error-500" },
      { title: "Blank Page", path: "/general-pages/blank-page" },
    ],
  },
  // {
  //   title: "Projects",
  //   icon: <FileDocumentBoxIcon />,
  //   path: "http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html",
  //   externalLink: true,
  // },
];

const MiniDrawer: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuState, setMenuState] = useState<{ [key: string]: boolean }>({});
    const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    if (isExpanded) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsExpanded(!isExpanded);
  };
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (title: string) => {
    setMenuState({ ...menuState, [title]: !menuState[title] });
  };

  useEffect(() => {
    // Reset menu state on route change
    setMenuState({});
  }, [router]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        color="inherit"
        className={styles.navbar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box className={styles.searchField}>
            <form className={styles.form} action="#">
              <Box className={styles.inputGroup}>
                <Box className={styles.inputGroupPrepend}>
                  <IconButton className={styles.inputGroupText} disabled>
                    <SearchIcon />
                  </IconButton>
                </Box>
                <InputBase
                  placeholder="Search projects"
                  classes={{
                    root: styles.formControl,
                  }}
                />
              </Box>
            </form>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            <Box className={styles.ProfileIcon}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  src={face1.src}
                  alt="Profile Image"
                  className={styles.img}
                />
                <span
                  className={`${styles.availabilityStatus} ${styles.online}`}
                ></span>
                <Typography className={styles.ProfileName}>
                  David Greymax
                </Typography>
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
                className={styles.Menu}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  className={styles.IconStyle}
                >
                  <Cached fontSize="small" color="success" />
                  <Typography variant="inherit" noWrap>
                    <Trans>Activity Log</Trans>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  className={styles.IconStyle}
                >
                  <Logout fontSize="small" className={styles.LogoutIcon} />
                  <Typography variant="inherit" noWrap>
                    <Trans>Signout</Trans>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <IconButton
              size="small"
              aria-label="expand screen"
              color="inherit"
              onClick={handleExpandClick}
            >
              <CropFreeIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge
                badgeContent={""}
                color="success"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <MailIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                badgeContent={""}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton size="small" aria-label="Log Out" color="inherit">
              <PowerSettingsNewIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" aria-label="Log Out" color="inherit">
              <FormatLineSpacingIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuItems.map((item) => (
            <React.Fragment key={item.title}>
              <ListItem disablePadding sx={{ display: "block" }} className={styles.menuList}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => handleClick(item.title)}
                >
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                </ListItemButton>
                {item.subMenu && (
                  <Collapse
                    in={menuState[item.title]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          disablePadding
                          sx={{ display: "block" }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 4,
                            }}
                            component={Link}
                            to={subItem.path}
                          >
                            <ListItemText
                              primary={subItem.title}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider />
        {/* Additional Menu Items */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Main content */}
      </Box>
    </>
  );
}
export default MiniDrawer;