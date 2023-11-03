import { Box, Typography } from "@mui/material";
import styles from "./customheader.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import Logo from "@/assets/Logo.svg";
import supportImg from "@/assets/demoLink";
import Image from "next/image";

interface Props {
  customization: () => void;
}

const DemoCustomHeader = ({ customization }: Props): JSX.Element => {
  const router = useRouter();
  const handleClick = (): void => {
    router.push("/");
  };
  return (
    <Box className={styles.container}>
      <Box
        className={styles["back-box"]}
        id={"customheader-back-box"}
        onClick={handleClick}
      >
        <ArrowBackIosIcon id={"customheader-back"} />
        <Typography
          className={styles["back-text"]}
          id={"customheader-back-text"}
        >
          Back
        </Typography>
      </Box>
      <Box
        component={"figure"}
        className={styles.figure}
        id={"customheader-figure"}
      >
        <Image src={Logo} alt="Logo" style={{ maxWidth: "100%" }} />
      </Box>
      <Box
        className={styles["custom-box"]}
        id={"customheader-custom-box"}
        onClick={customization}
      >
        <Image
          src={supportImg.brush}
          alt="brush"
          style={{ width: "100%", height: "100%" }}
        />
        <Box className={styles["tooltip-box"]} id={"customheader-tooltip-box"}>
          <Image
            src={supportImg.tooltip}
            alt={"Personaliza"}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DemoCustomHeader;
