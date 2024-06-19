"use client"

// import React, { useState } from "react";
// import { Line, Bar, Doughnut, Pie, Scatter } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Breadcrumbs,
//   Link,
// } from "@mui/material";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );
// import ChartData from "@/constant";
// import ChartOptions from "@/constant";



const ChartJs: React.FC = () => {
//   const [data] = useState<ChartData>({
//     labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [10, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//         fill: false,
//       },
//     ],
//   });

//   const [options] = useState<ChartOptions>({
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//     legend: {
//       display: false,
//     },
//     elements: {
//       point: {
//         radius: 0,
//       },
//     },
//   });

//   const [areaData] = useState<ChartData>({
//     labels: ["2013", "2014", "2015", "2016", "2017"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//         fill: true,
//       },
//     ],
//   });

//   const [areaOptions] = useState<ChartOptions>({
//     plugins: {
//       filler: {
//         propagate: true,
//       },
//     },
//   });

//   const [doughnutPieData] = useState<ChartData>({
//     labels: ["Pink", "Blue", "Yellow"],
//     datasets: [
//       {
//         label: "", // The label can be empty for pie/doughnut charts
//         data: [30, 40, 30], // Correct format as an array of numbers
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 0,
//       },
//     ],
//   });

//   const [scatterChartData] = useState<ChartData>({
//     datasets: [
//       {
//         label: "First Dataset",
//         data: [
//           { x: -10, y: 0 },
//           { x: 0, y: 3 },
//           { x: -25, y: 5 },
//           { x: 40, y: 5 },
//         ],
//         backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//         borderColor: ["rgba(255,99,132,1)"],
//         borderWidth: 1,
//       },
//       {
//         label: "Second Dataset",
//         data: [
//           { x: 10, y: 5 },
//           { x: 20, y: -30 },
//           { x: -25, y: 15 },
//           { x: -10, y: 5 },
//         ],
//         backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//         borderColor: ["rgba(54, 162, 235, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   });

//     const [doughnutPieOptions] = useState<ChartOptions>({
//       responsive: true,
//       animation: {
//         animateScale: true,
//         animateRotate: true,
//       },
//     });


//   const [scatterChartOptions] = useState<ChartOptions>({
//     scales: {
//       xAxes: [
//         {
//           type: "linear",
//           position: "bottom",
//         },
//       ],
//     },
//   });

  return (
    // <Container>
    //   <div className="page-header">
    //     <Typography variant="h4" gutterBottom>
    //       Chart-js
    //     </Typography>
    //     <Breadcrumbs aria-label="breadcrumb">
    //       <Link
    //         color="inherit"
    //         href="#"
    //         onClick={(event) => event.preventDefault()}
    //       >
    //         Charts
    //       </Link>
    //       <Typography color="textPrimary">Chart-js</Typography>
    //     </Breadcrumbs>
    //   </div>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Line Chart</Typography>
    //           <Line data={data} options={options} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Bar Chart</Typography>
    //           <Bar data={data} options={options} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Area Chart</Typography>
    //           <Line data={areaData} options={areaOptions} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Doughnut Chart</Typography>
    //           <Doughnut data={doughnutPieData} options={doughnutPieOptions} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Pie Chart</Typography>
    //           <Pie data={doughnutPieData} options={doughnutPieOptions} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5">Scatter Chart</Typography>
    //           <Scatter data={scatterChartData} options={scatterChartOptions} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </Container>
    <div>
      Charts
      </div>
  );

}
export default ChartJs;
