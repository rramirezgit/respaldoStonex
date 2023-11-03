import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import CustomizationLink from "./customization/customizationLink";
import styles from "./demomenu.module.css";
import DescriptionLink from "./description/descriptionLink";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";

interface Props {
  type: "mobile" | "desktop";
}

const MenuLink = ({ type }: Props): JSX.Element => {
  const router = useRouter();
  const handleLogo = (): void => {
    router.push("/");
  };
  return (
    <Box className={styles.container}>
      <Box
        component={"figure"}
        sx={{
          height: "38px",
          marginBottom: "50px",
          padding: "0 40px",
          cursor: "pointer",
        }}
        onClick={handleLogo}
      >
        <Image src={Logo} style={{ maxHeight: "100%" }} alt="Luka" />
      </Box>
      <Box className={styles["overflow-container"]}>
        <Typography
          classes={{
            root: styles.title,
          }}
        >
          Customize your link
        </Typography>
        <Box
          sx={{
            marginBottom: "40px",
          }}
        >
          <DescriptionLink />
        </Box>
        <CustomizationLink type={type} />
      </Box>
    </Box>
  );
};

export default MenuLink;
