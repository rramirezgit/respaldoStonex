import styles from "./aboutUs.module.css";
import { Box } from "@mui/material";
import Ready from "@/components/ready";
import Layout from "@/components/layaouts/abousUs";
import Footer from "@/components/footer";
import Home from "@/components/templates/aboutUs/home";
import Experience from "@/components/templates/aboutUs/experience";
import OurCulture from "@/components/templates/aboutUs/ourCulture";
import Mision from "@/components/templates/aboutUs/mision";

const AboutUs = (): JSX.Element => {
  return (
    <Box className={styles.content}>
      <Home />
      <Experience />
      <OurCulture />
      <Mision />
      <Layout className={styles.layout}>
        <Box className={styles.contentReadyFoter}>
          <Ready aboutUs />
        </Box>
        <Footer disablePadding />
      </Layout>
    </Box>
  );
};

export default AboutUs;
