import React from "react";
import NextLink from "next/link"; // Import NextLink instead of Link
import { Box, Container, Typography, Button } from "@mui/material";
import styles from "../../../styles/errorPages.module.scss";

const Error404: React.FC = () => {
  return (
    <Box className={styles.errorPage}>
      <Container maxWidth="md" className={styles.errorContainer}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
        >
          <Typography variant="h1" className={styles.errorCode} style={{fontSize:'12rem'
          }}>
            404
          </Typography>
          <Box className={styles.errorMessage}>
            <Typography variant="h2" className={styles.sorryText}>
              SORRY!
            </Typography>
            <Typography variant="h5" className={styles.errorDescription}>
              The page you’re looking for was not found.
            </Typography>
          </Box>
        </Box>
        <Box mt={5} textAlign="center">
          {/* Use NextLink instead of Link */}
          <NextLink href="/dashboard" passHref className={styles.backButton}>
            Back to home
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Error404;
