import { Box } from "@mui/material";
import Image from "next/image";

interface IconBoxProps {
  src: string;
  alt: string;
  url: string;
}

const IconBox = ({ src, alt, url }: IconBoxProps): JSX.Element => {
  return (
    <Box
      sx={{
        marginRight: "20px",
        cursor: "pointer",
      }}
      onClick={() => window.open(url, "_blank")}
    >
      <Image src={src} alt={alt} width={19} height={19} />
    </Box>
  );
};

export default IconBox;
