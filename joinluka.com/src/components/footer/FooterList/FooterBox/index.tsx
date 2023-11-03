import { Box, Typography } from "@mui/material";
import { FooterBoxProps } from "@/components/footer/footer.interface";
import { useRouter } from "next/router";

const FooterBox = ({ title, text, id }: FooterBoxProps): JSX.Element => {
  const router = useRouter();

  return (
    <Box
      sx={{
        marginBottom: title ? "35px" : "15px",
        cursor: title ? "auto" : "pointer",
      }}
      onClick={
        id
          ? () => {
              router.push(`/${id}`);
            }
          : () => {}
      }
    >
      <Typography
        sx={{
          fontSize: title ? "18px" : "14px",
          fontWeight: title ? "bold" : "400",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default FooterBox;
