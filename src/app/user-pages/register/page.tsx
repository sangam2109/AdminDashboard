"use client"
import React, { Component } from "react";
import NextLink from "next/link";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import logo from "../../../assets/images/logo.svg";
import styles from "../../../styles/userpage.module.scss"; // Import SCSS styles

export class Register extends Component {
  render() {
    return (
      <Box className={styles.auth}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "120vh",
            alignContent: "center",
          }}
        >
          <Box className={styles.authFormLight}>
            <Box className={styles.brandLogo}>
              <Image src={logo} alt="logo" width={150} height={50} />
            </Box>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              New here?
            </Typography>
            <Typography variant="h6" className={styles.fontWeightLight}>
              Signing up is easy. It only takes a few steps
            </Typography>
            <form className={styles.pt3}>
              <div className={styles.searchField}>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="exampleInputUsername1"
                  placeholder="Username"
                />
              </div>
              <div className={styles.searchField}>
                <TextField
                  type="email"
                  variant="outlined"
                  fullWidth
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className={styles.searchField}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    labelId="country-label"
                    id="exampleFormControlSelect2"
                    label="Country"
                  >
                    <MenuItem value="">Select Country</MenuItem>
                    <MenuItem value="USA">United States of America</MenuItem>
                    <MenuItem value="UK">United Kingdom</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="Argentina">Argentina</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.searchField}>
                <TextField
                  type="password"
                  variant="outlined"
                  fullWidth
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <div className={styles.formCheck}>
                  <label className={styles.formCheck}>
                    <input type="checkbox" className={styles.Checkinput} />
                    <i className="input-helper"></i>I agree to all Terms &
                    Conditions
                  </label>
                </div>
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
              <Typography
                variant="body2"
                className={`${styles.textCenter} ${styles.fontWeightLight}`}
              >
                Already have an account?{" "}
                <NextLink
                  href="/user-pages/login"
                  passHref
                  className={styles.LoginLink}
                >
                  Login
                </NextLink>
              </Typography>
            </form>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Register;
