import { Box } from "@mui/material";
import styles from "./paycard.module.css";
import Typography from "@mui/material/Typography";
import PaymentImgs from "@/assets/demoLink/card";
import Image from "next/image";

interface Props {
  type: "card" | "other";
  text?: string;
  label?: string;
  img?: any;
  width?: number;
  height?: number;
  shape?: string;
  check: boolean;
}

const styleCard = {
  background: "var(--white) !important",
  backgroundRepeat: "no-repeat !important",
  backgroundPosition: "center !important",
  backgroundSize: "100% 100% !important",
};

const PayCard = ({
  type,
  label,
  img = "",
  shape = "",
  check,
  text,
}: Props): JSX.Element => {
  return (
    <Box
      className={styles.container}
      id={"paycard-container"}
      sx={type === "card" ? {} : styleCard}
    >
      {type === "card" ? (
        <Box
          id={"paycard-container"}
          sx={{
            position: "relative",
          }}
        >
          <Box className={styles["float-container"]} id={"check-container"}>
            <Box
              component={"figure"}
              className={styles.icons}
              id={"small-icon"}
            >
              <Image
                src={PaymentImgs.wifi}
                alt="Wireless"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box className={styles["big-circle"]} id={"big-circle"}>
              <Box className={styles["medium-circle"]} id={"medium-circle"}>
                <Box
                  className={styles["small-circle"]}
                  id={"small-circle"}
                  sx={{
                    display: check ? "block" : "none",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.content}>
            <Typography className={styles["pay-text"]} id={"paycard-text"}>
              **** 3507
            </Typography>
          </Box>
          <Box
            className={styles["float-container"]}
            id={"icons-container"}
            sx={{
              bottom: "0px",
            }}
          >
            <Box
              component={"figure"}
              className={styles.icons}
              id={"small-icon"}
            >
              <Image
                src={PaymentImgs.star}
                alt="Favorite"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Box component={"figure"} className={styles.icons} id={"big-icon"}>
              <Image
                src={PaymentImgs.visa}
                alt="Visa"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          id={"paycard-container"}
          sx={{
            position: "relative",
          }}
        >
          <Box className={styles["float-container"]} id={"check-container"}>
            <Box
              component={"figure"}
              className={styles.icons}
              id={"small-icon"}
              sx={{
                opacity: 0,
              }}
            >
              <Image
                src={PaymentImgs.wifi}
                alt="Wireless"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Box className={styles["big-circle"]} id={"big-circle"}>
              <Box className={styles["medium-circle"]} id={"medium-circle"}>
                <Box
                  className={styles["small-circle"]}
                  id={"small-circle"}
                  sx={{
                    display: check ? "block" : "none",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={styles["float-shape"]}
            id={"paycard-shape"}
            sx={{
              borderRadius: "8px",
              right: "0px",
            }}
          >
            <Image
              alt="Shape"
              src={shape}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box
            sx={{
              padding: "10px 15px",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component={"figure"}
              className={styles.logo}
              id={"paycard-icon"}
              sx={{
                position: "relative",
                backgroundImage: `url(${img.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
              }}
            ></Box>
            <Box>
              <Typography
                className={styles["paypal-title"]}
                id={"paycard-title"}
              >
                {label}
              </Typography>
              <Typography className={styles["paypal-text"]} id={"paycard-info"}>
                {text}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PayCard;
