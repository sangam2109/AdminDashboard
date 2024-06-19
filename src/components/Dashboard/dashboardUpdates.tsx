// RecentUpdates.tsx
import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import face3 from "../../assets/images/faces/face3.jpg";
import img1 from "../../assets/images/dashboardImages/img_1.jpg";
import img2 from "../../assets/images/dashboardImages/img_2.jpg";
import img3 from "../../assets/images/dashboardImages/img_3.jpg";
import img4 from "../../assets/images/dashboardImages/img_4.jpg";
import styles from "../../styles/RecentUpdates.module.scss";

const RecentUpdates: React.FC = () => {
  return (
    <div className={styles.card}>
      <Card>
        <CardContent className={styles.cardContent}>
          <CardHeader title="Recent Updates" />
          <div className={`${styles.dFlex} ${styles.mb5}`}>
            <div
              className={`${styles.dFlex} ${styles.alignItemsCenter} ${styles.mr4} ${styles.textMuted} ${styles.fontWeightLight}`}
            >
              <AccountCircleIcon className={styles.iconSm} />
              <span className={styles.mr2}>jack Menqu</span>
            </div>
            <div
              className={`${styles.dFlex} ${styles.alignItemsCenter} ${styles.textMuted} ${styles.fontWeightLight}`}
            >
              <AccessTimeIcon className={styles.iconSm} />
              <span className={styles.mr2}>October 3rd, 2018</span>
            </div>
          </div>
          <Grid container spacing={2} mt={3} className={styles.ImageCorousel}>
            <Grid item xs={6} pr={1}>
              <Image
                src={img1}
                className={`${styles.mb2} ${styles.mw100} ${styles.w100} rounded`}
                alt="face"
              />
              <Image
                src={img2}
                className={`${styles.mw100} ${styles.w100} rounded`}
                alt="face"
              />
            </Grid>
            <Grid item xs={6} pl={1}>
              <Image
                src={img3}
                className={`${styles.mb2} ${styles.mw100} ${styles.w100} rounded`}
                alt="face"
              />
              <Image
                src={img4}
                className={`${styles.mw100} ${styles.w100} rounded`}
                alt="face"
              />
            </Grid>
          </Grid>
          <div className={`${styles.dFlex} ${styles.alignItemsStart}`}>
            <Image
              src={face3}
              className={`${styles.imgSm} ${styles.roundedCircle} ${styles.mr3}`}
              alt="face"
            />
            <div className={`${styles.mb0} ${styles.flexGrow}`}>
              <Typography variant="h6" className={styles.mb2}>
                School Website - Authentication Module.
              </Typography>
              <Typography
                variant="body2"
                className={`${styles.mb0} ${styles.fontWeightLight}`}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </Typography>
            </div>
            <div className={styles.mrAuto}>
              <FavoriteBorderIcon className={styles.iconHeartOutline} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentUpdates;
