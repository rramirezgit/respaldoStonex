import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./description.module.css";
import coin from "@/assets/currency/coin.svg";

const Description = (): JSX.Element => {
  return (
    <Box
      sx={{
        padding: "0 35px",
      }}
    >
      <Box
        className={styles.container}
        sx={{
          width: {
            xs: "100%",
          },
        }}
      >
        <Box
          className={styles["text-logo-container"]}
          sx={{
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            marginBottom: {
              xs: "20px",
              sm: "30px",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box className={styles.logo} component={"figure"}>
            <Image
              src={coin}
              alt="coin"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Typography
            className={styles.title}
            sx={{
              fontSize: {
                xs: "30px !important",
                sm: "40px !important",
              },
            }}
          >
            Supported Currencies
          </Typography>
        </Box>
        <Box>
          <Typography
            className={styles.text}
            sx={{
              fontSize: {
                xs: "12px !important",
                sm: "16px !important",
              },
            }}
          >
            We support a broad list of currencies considering international
            regulations, in particular following US, UK and EU compliance
            guidelines.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
