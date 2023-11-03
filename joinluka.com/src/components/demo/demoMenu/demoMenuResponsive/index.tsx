import { createPortal } from "react-dom";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./menuresponsive.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";

interface Props {
  close: () => void;
  children: JSX.Element;
  mounted: boolean;
}

const DemoMenuResponsive = ({
  close,
  children,
  mounted,
}: Props): React.ReactPortal | null => {
  const ref = useRef<Element>(document.getElementById("modal") as HTMLElement);
  console.log({ mounted });
  const onCloseAnimation = (): void => {
    const container = document.getElementById("modal-display-container");
    if (container) {
      container.classList.add(styles["slide-out"]);
    }
    setTimeout(() => {
      close();
    }, 400);
  };

  return mounted
    ? createPortal(
        <Box
          id={"modal-display-container"}
          className={clsx(styles["modal-container"], styles["slide-in"])}
        >
          <Box className={styles.close}>
            <CloseIcon
              sx={{
                fontSize: "30px",
              }}
              onClick={onCloseAnimation}
            />
          </Box>
          <Box className={styles.wrapper}>{children}</Box>
        </Box>,
        ref.current
      )
    : null;
};

export default DemoMenuResponsive;
