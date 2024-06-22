"use client";
import React, { Component } from "react";
import NextLink from "next/link";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import logo from "../../../assets/images/logo.svg";
import styles from "../../../styles/userpage.module.scss"; // Import SCSS styles

export class Login extends Component {
  render() {
    return (
      <Box className={styles.auth}>
        <Container
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box className={styles.authFormLight}>
            <Box className={styles.brandLogo}>
              <Image src={logo} alt="logo" width={150} height={50} />
            </Box>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Hello! Let's get started
            </Typography>
            <Typography variant="h6" className={styles.fontWeightLight}>
              Sign in to continue.
            </Typography>
            <form className={styles.pt3}>
              <div className={styles.searchField}>
                <TextField
                  type="email"
                  placeholder="Username"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className={styles.searchField}>
                <TextField
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className={styles.mt3}>
                <Button
                  component={NextLink}
                  href="/dashboard"
                  variant="contained"
                  className={styles.authFormBtn}
                  fullWidth
                >
                  SIGN UP
                </Button>
              </div>
              <div className={styles.my2}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography variant="body2" style={{marginRight:'0'}}>Keep me signed in</Typography>
                  }
                  className={styles.formCheckLabel}
                />

                <Button
                  component={NextLink}
                  variant="text"
                  href="#"
                  className={styles.authLink}
                >
                  Forgot password?
                </Button>
              </div>
              <div className={styles.mb2}>
                <Button
                  type="button"
                  variant="contained"
                  className={styles.facebookBtn}
                >
                  <i className="mdi mdi-facebook mr-2"></i>Connect using
                  Facebook
                </Button>
              </div>
              <Typography
                variant="body2"
                className={`${styles.textCenter} ${styles.fontWeightLight}`}
              >
                Don't have an account?{" "}
                <NextLink href="/user-pages/register" passHref>
                  <Button component="a" className="text-primary">
                    Create
                  </Button>
                </NextLink>
              </Typography>
            </form>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Login;
