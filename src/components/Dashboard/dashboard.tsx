"use client";

import React, { useState } from "react";
import {
  Breadcrumbs,
  Typography,
  Box,
  IconButton,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import LinearProgress from "@mui/material/LinearProgress";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import DashboardTable from "./dashboardTable";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styles from "../../styles/dashboard.module.scss";
import circleImage from "../../assets/images/circle.svg";
import { defaultData } from "@/constant";
import Image from "next/image";
import RecentUpdates from "./dashboardUpdates";
import DashboardCharts from "./dashboardCharts";
import Tstyles from "../../styles/dashboardTable.module.scss";

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState(defaultData.todos);
  const [inputValue, setInputValue] = useState(defaultData.inputValue);

  const statusChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: event.target.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.pageHeader}>
      <Box className={styles.aligning}>
        <Box display="flex" alignItems="center">
          <IconButton className={styles.iconButton} edge="start">
            <HomeIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6" className={styles.pageTitle}>
            Dashboard
          </Typography>
        </Box>
        <nav aria-label="breadcrumb">
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" className={styles.breadcrumbItem}>
              Overview{" "}
              <ErrorOutlineIcon fontSize="small" className={styles.icon} />
            </Typography>
          </Breadcrumbs>
        </nav>
      </Box>
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientDanger}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <Typography variant="h4" className={styles.fontWeightNormal}>
                Weekly Sales{" "}
                <TrendingUpIcon
                  fontSize="large"
                  className={styles.floatRight}
                />
              </Typography>
              <Typography variant="h4" className={styles.mb5}>
                $ 15,0000
              </Typography>
              <Typography variant="h5" className={styles.cardText}>
                Increased by 60%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientInfo}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <Typography variant="h4" className={styles.fontWeightNormal}>
                Weekly Orders{" "}
                <BookmarkBorderIcon
                  fontSize="large"
                  className={styles.floatRight}
                />
              </Typography>
              <Typography variant="h4" className={styles.mb5}>
                45,6334
              </Typography>
              <Typography variant="h5" className={styles.cardText}>
                Decreased by 10%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientSuccess}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <Typography variant="h4" className={styles.fontWeightNormal}>
                Visitors Online{" "}
                <DiamondIcon fontSize="large" className={styles.floatRight} />
              </Typography>
              <Typography variant="h4" className={styles.mb5}>
                95,5741
              </Typography>
              <Typography variant="h5" className={styles.cardText}>
                Increased by 5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={styles.charts}>
        <DashboardCharts />
      </div>
      <div>
        <DashboardTable />
      </div>
      <div>
        <RecentUpdates />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card
            className={Tstyles.card}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardContent className={Tstyles.cardBody}>
              <Typography variant="h5" className={Tstyles.cardTitle}>
                Project Status
              </Typography>
              <table className={styles.table}>
                <thead className={styles.heading}>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Due Date</td>
                    <td>Progress</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Herman Beck</td>
                    <td>May 15, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={25}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientSuccess, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Messsy Adam</td>
                    <td>Jul 01, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={75}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientDanger, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>John Richards</td>
                    <td>Apr 12, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={90}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientWarning, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Peter Meggik</td>
                    <td>May 15, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientPrimary, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Edward</td>
                    <td>May 03, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientDanger, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ronald</td>
                    <td>Jun 05, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={65}
                        classes={{
                          root: styles.customLinearProgress, // Apply custom root style
                          bar: styles.badgeGradientInfo, // Apply custom bar style
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className={styles.todoCard}>
            <CardContent>
              <form onSubmit={addTodo} className={styles.todoForm}>
                <TextField
                  label="What do you need to"
                  variant="outlined"
                  value={inputValue}
                  onChange={inputChangeHandler}
                  className={styles.todoInput}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.todoButton}
                >
                  Add
                </Button>
              </form>
              <List>
                {todos.map((todo) => (
                  <ListItem key={todo.id} className={styles.todoItem}>
                    <Checkbox
                      checked={todo.isCompleted}
                      onChange={(event) => statusChangedHandler(event, todo.id)}
                      className={styles.checkbox}
                    />
                    <ListItemText
                      primary={todo.task}
                      className={
                        todo.isCompleted ? styles.completedTask : undefined
                      }
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeTodo(todo.id)}
                      className={
                        todo.isCompleted
                          ? styles.completedRemoveIcon
                          : undefined
                      }
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
