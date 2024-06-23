"use client";
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Checkbox,
  Button,
  Box,
  Breadcrumbs,
} from "@mui/material";

import styles from "../../../styles/mdiIcons.module.scss";
import NextLink from "next/link"; // Import Next.js Link

const Forms: React.FC = () => {
  return (
    <div>
     
      <div className={styles.pageHeader}>
        <div className={styles.aligning}>
          <Typography variant="h5" className={styles.pageTitle}>
            Form elements
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
            <Typography
              component={NextLink}
              color="inherit"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Forms
            </Typography>

            <Typography color="textPrimary">Form elements</Typography>
          </Breadcrumbs>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={styles.card}>
              <CardContent className={styles.cardBody}>
                <Typography variant="h4" className={styles.CardTitle}>
                  Default form
                </Typography>
                <Typography className={styles.CardDescription}>
                  Basic form layout
                </Typography>
                <form className="forms-sample">
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputUsername1">
                      Username
                    </FormLabel>
                    <TextField
                      id="exampleInputUsername1"
                      placeholder="Username"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputEmail1">
                      Email address
                    </FormLabel>
                    <TextField
                      id="exampleInputEmail1"
                      placeholder="Email"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputPassword1">
                      Password
                    </FormLabel>
                    <TextField
                      type="password"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputConfirmPassword1">
                      Confirm Password
                    </FormLabel>
                    <TextField
                      type="password"
                      id="exampleInputConfirmPassword1"
                      placeholder="Password"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormGroup >
                    <Checkbox id="rememberMe" />
                    <FormLabel htmlFor="rememberMe">Remember me</FormLabel>
                  </FormGroup>
                  <Button variant="contained" color="primary" className="mr-2">
                    Submit
                  </Button>
                  <Button variant="contained" >
                    Cancel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Form */}
          <Grid item xs={12} md={6}>
            <Card className="card">
              <CardContent>
                <Typography variant="h4" className="card-title">
                  Horizontal Form
                </Typography>
                <Typography className="card-description">
                  Horizontal form layout
                </Typography>
                <form className="forms-sample">
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputUsername2">Email</FormLabel>
                    <TextField
                      id="exampleInputUsername2"
                      placeholder="Username"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputEmail2">Email</FormLabel>
                    <TextField
                      id="exampleInputEmail2"
                      placeholder="Email"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputMobile">Mobile</FormLabel>
                    <TextField
                      id="exampleInputMobile"
                      placeholder="Mobile number"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputPassword2">
                      Password
                    </FormLabel>
                    <TextField
                      type="password"
                      id="exampleInputPassword2"
                      placeholder="Password"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <FormLabel htmlFor="exampleInputConfirmPassword2">
                      Re Password
                    </FormLabel>
                    <TextField
                      type="password"
                      id="exampleInputConfirmPassword2"
                      placeholder="Password"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormGroup>
                    <Checkbox id="rememberMe2" />
                    <FormLabel htmlFor="rememberMe2">Remember me</FormLabel>
                  </FormGroup>
                  <Button variant="contained" color="primary" className="mr-2">
                    Submit
                  </Button>
                  <Button variant="contained" >
                    Cancel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Forms;
