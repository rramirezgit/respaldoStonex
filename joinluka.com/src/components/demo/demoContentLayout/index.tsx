import { Box, Typography } from "@mui/material";
import styles from "./contentlayout.module.css";
import { useDispatch } from "react-redux";

import { resetState } from "@/redux/slices/demoSlice";
import Techs from "@/assets/demoLink/support";
import Image from "next/image";

interface LayoutProps {
  children: JSX.Element;
  support?: "javascript" | "mobile";
}

const DemoContentLayout = ({ children, support }: LayoutProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <Box className={styles.container}>
      <Box className={styles.content} id={"demo-content"}>
        {children}
      </Box>
      <Box
        className={styles["text-box"]}
        onClick={() => dispatch(resetState())}
      >
        <Typography id={"contentlayout-text"} className={styles.text}>
          Clear All
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "none",
            sm: support ? "flex" : "none",
          },
          alignItems: "center",
          justifyContent: "center",
          left: "40px",
          bottom: {
            xs: "-90px",
            md: "15px",
          },
        }}
      >
        {support === "mobile" && (
          <>
            <Box component={"figure"}>
              <Image src={Techs.android} alt="Android" />
            </Box>
            <Box component={"figure"}>
              <Image src={Techs.ios} alt="IOS" />
            </Box>
          </>
        )}
        {support === "javascript" && (
          <>
            <Box component={"figure"}>
              <Image src={Techs.js} alt="Javascript" />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DemoContentLayout;
