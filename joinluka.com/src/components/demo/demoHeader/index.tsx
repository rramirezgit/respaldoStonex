import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import styles from "./demoheader.module.css";
import { useRouter } from "next/router";
import { colors } from "@/theme/variables";
import Image from "next/image";
import demoImgs from "@/assets/demo";

interface DemoHeaderProps {
  mobileState: boolean;
  desktopState: boolean;
  handleMobile: () => void;
  handleDesktop: () => void;
}

const DemoHeader = ({
  mobileState,
  desktopState,
  handleMobile,
  handleDesktop,
}: DemoHeaderProps): JSX.Element => {
  const router = useRouter();
  const handleClick = (): void => {
    router.push("/");
  };
  return (
    <Box
      className={styles.container}
      sx={{
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
        width: {
          xs: "100%",
          md: "calc(50% + 100px)",
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: {
            xs: "none",
            md: "flex",
          },
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <ArrowBackIosIcon className={styles.back} />
        <Typography className={styles["back-text"]}>Back</Typography>
      </Box>
      <Box className={styles["desktop-mobile"]} id={"desktop-mobile-box"}>
        <Box
          component={"figure"}
          className={styles.figure}
          onClick={handleDesktop}
        >
          <Image
            src={desktopState ? demoImgs.monitorBlue : demoImgs.monitor}
            alt={"desktop"}
          />
        </Box>
        <Box
          component={"figure"}
          className={styles.figure}
          onClick={handleMobile}
        >
          <Image
            src={mobileState ? demoImgs.mobileBlue : demoImgs.mobile}
            alt={"mobile"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DemoHeader;
