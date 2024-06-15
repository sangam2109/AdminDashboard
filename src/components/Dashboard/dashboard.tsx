"use client"

import React, { useState, useEffect, useRef, useCallback  } from "react";
import {
  Breadcrumbs,
  Typography,
  Box,
  IconButton,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import styles from "../../styles/dashboard.module.scss";
import circleImage from "../../assets/images/circle.svg";
import { defaultData } from "@/constant";
import DashboardTable from "./dashboardTable";
import Image from "next/image";
import RecentUpdates from "./dashboardUpdates";
import DashboardCharts from "./dashboardCharts";

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState(defaultData.todos);
  const [inputValue, setInputValue] = useState(defaultData.inputValue);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Define the handleChange function to update the selected date
  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };
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

   const removeTodo = (index: number) => {
     const updatedTodos = [...todos];
     updatedTodos.splice(index, 1);
     setTodos(updatedTodos);
   };

   const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
     setInputValue(event.target.value);
   };
  return (
    <div className={styles.pageHeader}>
      <Box display="flex" alignItems="center">
        <IconButton className={styles.iconButton} edge="start">
          <HomeIcon />
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
              <Typography variant="h2" className={styles.mb5}>
                $ 15,0000
              </Typography>
              <Typography variant="h6" className={styles.cardText}>
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
              <Typography variant="h2" className={styles.mb5}>
                45,6334
              </Typography>
              <Typography variant="h6" className={styles.cardText}>
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
              <Typography variant="h2" className={styles.mb5}>
                95,5741
              </Typography>
              <Typography variant="h6" className={styles.cardText}>
                Increased by 5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div>
        <DashboardCharts/>
      </div>
      <div>
        <DashboardTable />
      </div>
      <div>
        <RecentUpdates startDate={selectedDate} handleChange={handleChange} />
      </div>
      <div className="row">
        <div className="col-xl-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Project Status</h4>
              <TableContainer>
                <Table className="table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Herman Beck</TableCell>
                      <TableCell>May 15, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={25} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Messsy Adam</TableCell>
                      <TableCell>Jul 01, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={75} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>John Richards</TableCell>
                      <TableCell>Apr 12, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={90} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>Peter Meggik</TableCell>
                      <TableCell>May 15, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={50} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>Edward</TableCell>
                      <TableCell>May 03, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={50} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>Ronald</TableCell>
                      <TableCell>Jun 05, 2015</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={65} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <form onSubmit={addTodo}>
          <input type="text" value={inputValue} onChange={inputChangeHandler} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos && todos?.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(event) => statusChangedHandler(event, todo.id)}
              />
              <span>{todo.task}</span>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
