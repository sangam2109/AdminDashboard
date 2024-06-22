"use client"
import React from "react";
import {
  Breadcrumbs,
  Card,
  CardContent,
  Typography,
  Grid,
  Box
} from "@mui/material";
import Icon from "@mdi/react";
import {
  mdiAccessPoint,
  mdiAccessPointNetwork,
  mdiAutorenew,
  mdiAccount,
  mdiAccountBox,
  mdiAccountBoxOutline,
  mdiAccountDetails,
  mdiAccountCheck,
  mdiAccountCircle,
  mdiAccountConvert,
  mdiAccountKey,
  mdiAccountMinus,
  mdiAccountMultiple,
  mdiAccountMultipleMinus,
  mdiAccountMultipleOutline,
  mdiAccountMultiplePlus,
  mdiAccountNetwork,
  mdiAccountOff,
  mdiAccountOutline,
  mdiAccountPlus,
  mdiAccountRemove,
  mdiAccountSearch,
  mdiAccountSettings,
  mdiAccountStar,
  mdiAccountSwitch,
  mdiAdjust,
  mdiAirConditioner,
  mdiAirballoon,
  mdiAirplane,
  mdiAirplaneLanding,
  mdiAirplaneOff,
  mdiAirplaneTakeoff,
  mdiAlarm,
  mdiAlarmCheck,
  mdiAlarmMultiple,
  mdiAlarmOff,
  mdiAlarmPlus,
  mdiAlertBox,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiAlertOctagon,
  mdiAlertOutline,
  mdiAlpha,
  mdiAlphabetical,
  mdiAltimeter,
  mdiAmbulance,
  mdiAmplifier,
  mdiAnchor,
  mdiAndroid,
  mdiAndroidStudio,
  mdiAnimation,
  mdiApple,
  mdiAppleFinder,
  mdiAppleIos,
  mdiAppleKeyboardCaps,
  mdiAppleKeyboardCommand,
  mdiAppleKeyboardControl,
  mdiAppleKeyboardOption,
  mdiAppleKeyboardShift,
  mdiAppleSafari,
  mdiApplication,
  mdiApps,
  mdiArchive,
  mdiArrangeBringForward,
  mdiArrangeBringToFront,
  mdiArrangeSendBackward,
  mdiArrangeSendToBack,
  mdiArrowAll,
  mdiArrowBottomLeft,
  mdiArrowBottomRight,
  mdiArrowDown,
  mdiArrowDownBoldCircle,
  mdiArrowDownBoldCircleOutline,
  mdiArrowDownBoldHexagonOutline,
  mdiArrowDownDropCircle,
  mdiArrowDownDropCircleOutline,
  mdiArrowExpand,
  mdiArrowExpandAll,
  mdiArrowLeft,
  mdiArrowLeftBoldCircle,
  mdiArrowLeftBoldCircleOutline,
  mdiArrowLeftBoldHexagonOutline,
  mdiArrowLeftDropCircle,
  mdiArrowLeftDropCircleOutline,
  mdiArrowRight,
  mdiArrowRightBoldCircleOutline,
  mdiArrowRightBoldHexagonOutline,
  mdiArrowRightDropCircle,
  mdiArrowRightDropCircleOutline,
  mdiArrowTopLeft,
  mdiArrowTopRight,
  mdiArrowUp,
  mdiArrowUpBold,
  mdiArrowUpBoldCircle,
  mdiArrowUpBoldCircleOutline,
  mdiArrowUpBoldHexagonOutline,
  mdiArrowUpDropCircle,
  mdiArrowUpDropCircleOutline,
  mdiAssistant,
  mdiAt,
  mdiAttachment,

  mdiAutoFix,
  mdiAutoUpload,
  mdiAvTimer,
  mdiBaby,
  mdiBackburger,
  mdiBackspace,
  mdiBackupRestore,
  mdiBank,
  mdiBarcode,
  mdiBarcodeScan,
  mdiBarley,
  mdiBarrel,
  mdiBasket,
  mdiBasketFill,
  mdiBasketUnfill,
  mdiArrowRightBoldCircle,
  mdiArrowSplitHorizontal,
  mdiArrowUpDownBold,
  mdiAtlassian,
  mdiBabyCarriage,
  mdiBagCarryOnCheck,
  mdiBankMinus,
  mdiBasketOutline,
  mdiBattery20Bluetooth,
  mdiBatteryAlertVariantOutline,
  mdiBatteryBluetooth,
  mdiBatteryAlertVariant,
  mdiBatteryAlertBluetooth,
  mdiBatteryAlert,
  mdiBattery90Bluetooth,
  mdiBattery90,
  mdiBattery80Bluetooth,
  mdiBattery80,
  mdiBat,
  mdiBasketballHoopOutline,
  mdiBaseballDiamondOutline,
  mdiAlert,
} from "@mdi/js";
import styles from "../../../styles/mdiIcons.module.scss";
import NextLink from "next/link"; // Import Next.js Link

const Mdi: React.FC = () => {
  return (
    <div>
    
      <div className={styles.pageHeader}>
        <div className={styles.aligning}>
          <Typography variant="h5" className={styles.pageTitle}>
            Material design icons
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
            <Typography
              component={NextLink}
              color="inherit"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Icons
            </Typography>

            <Typography color="textPrimary">Material design icons</Typography>
          </Breadcrumbs>
        </div>

        <Grid container spacing={3} className={styles.IconBox}>
          <Grid item xs={12} className={styles.Columns}>
            <Card className={styles.card}>
              <CardContent className={styles.cardBody}>
                <Grid container spacing={3} className={styles.iconsList}>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccessPoint}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-access-point</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccessPointNetwork}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-access-point-network</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAccount} size={1} className={styles.icon} />
                    <span>mdi mdi-account</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountBox}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-box</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountBoxOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-box-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountDetails}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-card-details</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountCheck}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-check</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountConvert}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-convert</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountKey}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-key</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountMinus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-minus</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountMultiple}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-multiple</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountMultipleMinus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-multiple-minus</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountMultipleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-multiple-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountMultiplePlus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-multiple-plus</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountNetwork}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-network</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountOff}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-off</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountPlus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-plus</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountRemove}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-remove</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountSearch}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-search</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountSettings}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-settings</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountStar}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-star</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAccountSwitch}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-account-switch</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAdjust} size={1} className={styles.icon} />
                    <span>mdi mdi-adjust</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAirConditioner}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-air-conditioner</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAirballoon}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-airballoon</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAirplane} size={1} className={styles.icon} />
                    <span>mdi mdi-airplane</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAirplaneLanding}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-airplane-landing</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAirplaneOff}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-airplane-off</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAirplaneTakeoff}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-airplane-takeoff</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAlarm} size={1} className={styles.icon} />
                    <span>mdi mdi-alarm</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlarmCheck}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alarm-check</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlarmMultiple}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alarm-multiple</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAlarmOff} size={1} className={styles.icon} />
                    <span>mdi mdi-alarm-off</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlarmPlus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alarm-plus</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAlert} size={1} className={styles.icon} />
                    <span>mdi mdi-alert</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAlertBox} size={1} className={styles.icon} />
                    <span>mdi mdi-alert-box</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlertCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alert-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlertCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alert-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlertOctagon}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alert-octagon</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlertOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alert-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAlpha} size={1} className={styles.icon} />
                    <span>mdi mdi-alpha</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAlphabetical}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-alphabetical</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAltimeter}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-altimeter</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAmbulance}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-ambulance</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAmplifier}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-amplifier</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAnchor} size={1} className={styles.icon} />
                    <span>mdi mdi-anchor</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAndroid} size={1} className={styles.icon} />
                    <span>mdi mdi-android</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAndroidStudio}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-android-studio</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAnimation}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-animation</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiApple} size={1} className={styles.icon} />
                    <span>mdi mdi-apple</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleFinder}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-finder</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAppleIos} size={1} className={styles.icon} />
                    <span>mdi mdi-apple-ios</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleKeyboardCaps}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-keyboard-caps</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleKeyboardCommand}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-keyboard-command</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleKeyboardControl}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-keyboard-control</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleKeyboardOption}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-keyboard-option</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleKeyboardShift}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-keyboard-shift</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAppleSafari}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-apple-safari</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiApplication}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-application</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiApps} size={1} className={styles.icon} />
                    <span>mdi mdi-apps</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiArchive} size={1} className={styles.icon} />
                    <span>mdi mdi-archive</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrangeBringForward}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrange-bring-forward</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrangeBringToFront}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrange-bring-to-front</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrangeSendBackward}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrange-send-backward</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrangeSendToBack}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrange-send-to-back</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiArrowAll} size={1} className={styles.icon} />
                    <span>mdi mdi-arrow-all</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowBottomLeft}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-bottom-left</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowBottomRight}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-bottom-right</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDown}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDownBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down-bold-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDownBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down-bold-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDownBoldHexagonOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down-bold-hexagon-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDownDropCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down-drop-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowDownDropCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-down-drop-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowExpand}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-expand</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowExpandAll}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-expand-all</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeft}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-bold-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-bold-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftBoldHexagonOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-bold-hexagon-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeft}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-box</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftDropCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-drop-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowLeftDropCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-left-drop-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRight}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-bold-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-bold-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightBoldHexagonOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-bold-hexagon-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRight}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-box</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightDropCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-drop-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowRightDropCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-right-drop-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowSplitHorizontal}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-split-horizontal</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowTopLeft}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-top-left</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowTopRight}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-top-right</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiArrowUp} size={1} className={styles.icon} />
                    <span>mdi mdi-arrow-up</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpBoldCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-bold-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpBoldCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-bold-circle-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpBoldHexagonOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-bold-hexagon-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpDownBold}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-down-bold</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpDropCircle}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-drop-circle</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiArrowUpDropCircleOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-arrow-up-drop-circle-outline</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAssistant}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-assistant</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAt} size={1} className={styles.icon} />
                    <span>mdi mdi-at</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAtlassian}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-atlassian</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAttachment}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-attachment</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiAutoFix} size={1} className={styles.icon} />
                    <span>mdi mdi-auto-fix</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAutoUpload}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-auto-upload</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiAutorenew}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-autorenew</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBabyCarriage}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-baby-carriage</span>
                  </Grid>
                
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBackburger}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-backburger</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBackspace}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-backspace</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBackupRestore}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-backup-restore</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBagCarryOnCheck}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-bag-carry-on-check</span>
                  </Grid>
                
                  
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBank} size={1} className={styles.icon} />
                    <span>mdi mdi-bank</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBankMinus}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-bank-minus</span>
                  </Grid>
                  
                  
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBarcode} size={1} className={styles.icon} />
                    <span>mdi mdi-barcode</span>
                  </Grid>
                  
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBarcodeScan}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-barcode-scan</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBarley} size={1} className={styles.icon} />
                    <span>mdi mdi-barley</span>
                  </Grid>
                
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBarrel} size={1} className={styles.icon} />
                    <span>mdi mdi-barrel</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBaseballDiamondOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-baseball-diamond-outline</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBasket} size={1} className={styles.icon} />
                    <span>mdi mdi-basket</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBasketFill}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-basket-fill</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBasketOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-basket-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBasketUnfill}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-basket-unfill</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBasketballHoopOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-basketball-hoop-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon path={mdiBat} size={1} className={styles.icon} />
                    <span>mdi mdi-bat</span>
                  </Grid>
                 
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBattery80}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-80</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBattery80Bluetooth}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-80-bluetooth</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBattery90}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-90</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBattery90Bluetooth}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-90-bluetooth</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBatteryAlert}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-alert</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBatteryAlertBluetooth}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-alert-bluetooth</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBatteryAlertVariant}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-alert-variant</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBatteryAlertVariantOutline}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-alert-variant-outline</span>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
                    <Icon
                      path={mdiBatteryBluetooth}
                      size={1}
                      className={styles.icon}
                    />
                    <span>mdi mdi-battery-bluetooth</span>
                  </Grid>
                  {/* Add more icons as needed */}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Mdi;
