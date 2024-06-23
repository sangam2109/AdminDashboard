import React, { useEffect, useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";
import styles from "../../styles/dashboardCharts.module.scss"; // Adjust path as necessary
import { Chart, registerables } from "chart.js"; 
Chart.register(...registerables);
const DashboardCharts: React.FC = () => {
  const [visitSaleData, setVisitSaleData] = useState<any>({});
  const [visitSaleOptions] = useState<any>({
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            min: 0,
            stepSize: 20,
            max: 80,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(0,0,0,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
          ticks: {
            padding: 20,
            fontColor: "#9c9fa6",
            autoSkip: true,
          },
          categoryPercentage: 0.5,
          barPercentage: 0.5,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  });
  const [trafficData, setTrafficData] = useState<any>({});
  const [trafficOptions] = useState<any>({
    responsive: true,
    aspectRatio:2,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  });

  useEffect(() => {
    const gradientBar1 = "rgba(218, 140, 255, 1)";
    const gradientBar2 = "rgba(54, 215, 232, 1)";
    const gradientBar3 = "rgba(255, 191, 150, 1)";
    const gradientdonut1 = "rgba(54, 215, 232, 1)";
    const gradientdonut2 = "rgba(6, 185, 157, 1)";
    const gradientdonut3 = "rgba(254, 124, 150, 1)";

    const newVisitSaleData = {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
      datasets: [
        {
          label: "CHN",
          borderColor: gradientBar1,
          backgroundColor: gradientBar1,
          hoverBackgroundColor: gradientBar1,
          legendColor: gradientBar1,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [20, 40, 15, 35, 25, 50, 30, 20],
        },
        {
          label: "USA",
          borderColor: gradientBar2,
          backgroundColor: gradientBar2,
          hoverBackgroundColor: gradientBar2,
          legendColor: gradientBar2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [40, 30, 20, 10, 50, 15, 35, 40],
        },
        {
          label: "UK",
          borderColor: gradientBar3,
          backgroundColor: gradientBar3,
          hoverBackgroundColor: gradientBar3,
          legendColor: gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [70, 10, 30, 40, 25, 50, 15, 30],
        },
      ],
    };

    const newTrafficData = {
      datasets: [
        {
          data: [30, 30, 40],
          backgroundColor: [gradientdonut1, gradientdonut2, gradientdonut3],
          hoverBackgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3,
          ],
          borderColor: [gradientdonut1, gradientdonut2, gradientdonut3],
          legendColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        },
      ],

      labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
    };

    setVisitSaleData(newVisitSaleData);
    setTrafficData(newTrafficData);
  }, []);

  return (
    <Grid container spacing={3} >
      <Grid item xs={12} md={7}>
        {visitSaleData && visitSaleData.datasets && (
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.clearfix }>
                <Typography
                  variant="h4"
                  className={` ${styles.cardTitle}  ${styles.floatLeft}`}
                >
                  Visit And Sales Statistics
                </Typography>
                <div
                  id="visit-sale-chart-legend"
                  className={`${styles.roundedLegend} ${styles.legendHorizontal} ${styles.legendTopRight} ${styles.floatRight}`}
                >
                  <ul className={
                    styles.align
                  }>
                    {visitSaleData.datasets.map(
                      (dataset: any, index: number) => (
                        <li key={index}>
                          <span
                            className={`${
                              styles.legendDots
                            } bg-${dataset.label.toLowerCase()}`}
                          >
                            {dataset.label}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <Bar
                className="chartLegendContainer"
                data={visitSaleData}
                options={visitSaleOptions}
                id="visitSaleChart"
              />
            </div>
          </div>
        )}
      </Grid>
      <Grid item xs={12} md={5}>
        {trafficData && trafficData.datasets && (
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <Typography variant="h4" className={styles.cardTitle}>
                Traffic Sources
              </Typography>
              <Doughnut data={trafficData} options={trafficOptions}  />
              <div
                id="traffic-chart-legend"
                className={`${styles.roundedLegend} ${styles.legendVertical} ${
                  styles.legendBottomLeft
                } `}
              >
                <ul>
                  {trafficData.labels.map((label: string, index: number) => (
                    <li key={index}>
                      <span
                        className={styles.legendDots} 
                      >
                        {label}
                      </span>
                      <span className={styles.floatRight}>
                        {trafficData.datasets[0].data[index]}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default DashboardCharts;
