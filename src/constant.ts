
export default interface ChartData {
  labels?: string[];
  datasets: {
    label: string;
    data: number[] | { x: number; y: number }[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    fill?: boolean;
  }[];
}
export default interface ChartOptions {
  scales?: {
    yAxes?: {
      ticks: {
        beginAtZero: boolean;
      };
    }[];
    xAxes?: {
      type: string;
      position: string;
    }[];
  };
  legend?: {
    display: boolean;
  };
  elements?: {
    point: {
      radius: number;
    };
  };
  plugins?: {
    filler?: {
      propagate: boolean;
    };
  };
  responsive?: boolean;
  animation?: {
    animateScale?: boolean;
    animateRotate?: boolean;
  };
}
export const defaultData = {
  startDate: new Date(),
  visitSaleData: {},
  visitSaleOptions: {
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
  },
  trafficData: {},
  trafficOptions: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  },
  todos: [
    {
      id: 1,
      task: "Pick up kids from school",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Prepare for presentation",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Print Statements",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Create invoice",
      isCompleted: false,
    },
    {
      id: 5,
      task: "Call John",
      isCompleted: true,
    },
    {
      id: 6,
      task: "Meeting with Alisa",
      isCompleted: false,
    },
  ],
  inputValue: "",
};
