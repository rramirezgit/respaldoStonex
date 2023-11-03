import { Box } from "@mui/material";
import vposPhone from "@/assets/vpos/animation.svg";
import wifi from "@/assets/vpos/wifi.svg";
import Image from "next/image";

const PhoneBox = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        component={"figure"}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={vposPhone}
          alt={"Demo"}
          style={{
            height: "100%",
            maxWidth: "640px",
            width: "100%",
            maxHeight: "645px",
          }}
        />
      </Box>
      <Box
        component={"figure"}
        sx={{
          position: "absolute",
          right: "43%",
          top: "-12%",
          width: "15%",
        }}
      >
        <Image
          src={wifi}
          alt={"Demo"}
          style={{ maxWidth: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default PhoneBox;
