import { Typography } from "@mui/material";
import cardCSS from "./card.module.css";
import clsx from "clsx";
import lukaCSS from "@/styles/luka.module.css";
import { Box } from "@mui/system";
import { useState } from "react";
import Image from "next/image";
import placeHolder from "@/assets/placeholder.svg";

interface Props {
  imageUrl?: string;
  text: string;
  title: string;
  id: string;
  idCard: string;
}

const Card = ({ text, imageUrl, title, id, idCard }: Props): JSX.Element => {
  const [linked, setlinked] = useState(false);
  const handleClickScroll = (id: any): void => {
    setlinked(true);
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMouseEvent = (event: string): void => {
    if (event === "out") {
      const card = document.getElementById(idCard) as HTMLDivElement;
      if (card) {
        if (linked) {
          setlinked(false);
          setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.transition = "transform 0.5s";
          }, 1000);
          return;
        }
        card.style.transform = "scale(1)";
      }
      return;
    }

    const card = document.getElementById(idCard) as HTMLDivElement;
    if (card) {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.5s";
    }
  };

  return (
    <Box
      id={idCard}
      className={cardCSS.container}
      onMouseEnter={() => {
        if (window.innerWidth > 980) {
          handleMouseEvent("enter");
        }
      }}
      onMouseLeave={() => handleMouseEvent("out")}
      sx={{
        height: "390px",
        width: {
          xs: "322px",
          lg: "350px",
        },
        minWidth: {
          xs: "322px",
          lg: "350px",
        },
      }}
    >
      <Box>
        <Box component={"figure"} className={cardCSS.figure}>
          <Image
            className={cardCSS.img}
            src={imageUrl ?? placeHolder}
            alt="Placeholder"
          />
        </Box>
        <Typography className={cardCSS.title}>{title}</Typography>
        <Typography className={cardCSS.paragraph}>{text}</Typography>
      </Box>
      <Typography
        className={clsx(cardCSS["paragraph--blue"], lukaCSS.pointer)}
        onClick={() => handleClickScroll(id)}
      >
        {"Learn more >"}
      </Typography>
    </Box>
  );
};

export default Card;
