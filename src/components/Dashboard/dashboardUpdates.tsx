// RecentUpdates.tsx
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import face3 from "../../assets/images/faces/face3.jpg"
import img1 from "../../assets/images/dashboardImages/img_1.jpg"
import img2 from "../../assets/images/dashboardImages/img_2.jpg"
import img3 from "../../assets/images/dashboardImages/img_3.jpg"
import img4 from "../../assets/images/dashboardImages/img_4.jpg"

interface RecentUpdatesProps {
  startDate: Date;
  handleChange: (date: Date | null) => void;
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({
  startDate,
  handleChange,
}) => {
  return (
    <div className="row">
      <div className="col-lg-5 grid-margin stretch-card">
        <Card>
          <CardContent className="p-0 d-flex">
            <div className="dashboard-custom-date-picker">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
              </LocalizationProvider>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-lg-7 grid-margin stretch-card">
        <Card>
          <CardContent>
            <CardHeader title="Recent Updates" />
            <div className="d-flex">
              <div className="d-flex align-items-center mr-4 text-muted font-weight-light">
                <i className="mdi mdi-account-outline icon-sm mr-2"></i>
                <span>jack Menqu</span>
              </div>
              <div className="d-flex align-items-center text-muted font-weight-light">
                <i className="mdi mdi-clock icon-sm mr-2"></i>
                <span>October 3rd, 2018</span>
              </div>
            </div>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={6} pr={1}>
                <Image
                  src={img1}
                  className="mb-2 mw-100 w-100 rounded"
                  alt="face"
                />
                <Image
                  src={img2}
                  className="mw-100 w-100 rounded"
                  alt="face"
                />
              </Grid>
              <Grid item xs={6} pl={1}>
                <Image
                  src={img3}
                  className="mb-2 mw-100 w-100 rounded"
                  alt="face"
                />
                <Image
                  src={img4}
                  className="mw-100 w-100 rounded"
                  alt="face"
                />
              </Grid>
            </Grid>
            <div className="d-flex mt-5 align-items-start">
              <Image
                src={face3}
                className="img-sm rounded-circle mr-3"
                alt="face"
              />
              <div className="mb-0 flex-grow">
                <Typography variant="h5" className="mr-2 mb-2">
                  School Website - Authentication Module.
                </Typography>
                <Typography variant="body2" className="mb-0 font-weight-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </Typography>
              </div>
              <div className="ml-auto">
                <i className="mdi mdi-heart-outline text-muted"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecentUpdates;
