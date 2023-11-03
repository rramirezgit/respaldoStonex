import {
  createTheme,
  ThemeProvider,
  useTheme,
  CssBaseline,
} from "@mui/material";
import { ReactElement } from "react";
import config from "@/const";
import { colors } from "./variables";
import { globalStyle } from "./GlobalSetting";
import { Global, css } from "@emotion/react";

interface ThemeProps {
  children?: ReactElement | ReactElement[];
}

declare module "@mui/material/styles" {
  interface Palette {
    green_luka?: Palette["primary"];
    aqua_blue?: Palette["primary"];
    primary_a?: Palette["primary"];
    white?: Palette["primary"];
  }
  interface PaletteOptions {
    green_luka?: Palette["primary"];
    aqua_blue?: Palette["primary"];
    primary_a?: Palette["primary"];
    white?: Palette["primary"];
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    carousel: true;
  }
}

// Update the Button's color prop options
declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    green_luka: true;
    aqua_blue: true;
    primary_a: true;
    white: true;
  }
}

const ThemeLuka = ({ children }: ThemeProps): JSX.Element => {
  const theme = useTheme();
  const themenew = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            [theme.breakpoints.down("sm")]: {
              paddingTop: "10px",
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            [theme.breakpoints.down("sm")]: {
              padding: "20px 0px 0px 0px",
            },
            [theme.breakpoints.down("md")]: {
              padding: "30px 0px 0px 0px",
            },
            [theme.breakpoints.up("md")]: {
              padding: "40px 0px 0px 0px",
            },
            maxWidth: "1300px",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: "8px",
            backgroundColor: colors.bg_gray,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "none",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            alignItems: "flex-start",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            height: "45px",
            width: "85px",
            padding: "12px 24px 12px 0",
          },
          track: {
            borderRadius: "10px",
          },
          switchBase: {
            "&.Mui-checked": {
              transform: "translateX(40px)",
            },
            backgroundColor: "transparent",
            padding: "7px 18px 9px 0px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          thumb: {
            backgroundImage: `url(${config.UrlBaseImg}demoLink/in.png)`,
            backgroundColor: colors.primary_buttons,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "30px",
            width: "30px",
            boxShadow: "1.5px 1.5px 1.5px rgba(51, 51, 51, 0.25)",
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            cursor: "pointer",
          },
          input: {
            cursor: "pointer",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            "&:hover:before": {
              borderColor: `${colors.primary_buttons} !important`,
              transition: "none",
            },
            "&:hover:after": {
              borderColor: `${colors.primary_buttons} !important`,
              transition: "none",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover fieldset": {
              borderColor: `${colors.primary_buttons} !important`,
              transition: "none",
              outline: "none",
            },
            "&.Mui-error:hover fieldset": {
              borderColor: `${colors.error_state} !important`,
              transition: "none",
              outline: "none",
            },
            "& fieldset": {
              borderColor: colors.light_gray,
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          underline: {
            "&.Mui-focused:before": {
              borderColor: `${colors.primary_buttons} !important`,
              transition: "none",
            },
            "&.Mui-focused:after": {
              borderColor: `${colors.primary_buttons} !important`,
              transition: "none",
            },
            "&:before": {
              borderColor: colors.light_gray,
              transition: "none",
              outline: "none",
            },
            "&:after": {
              borderColor: colors.light_gray,
              transition: "none",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderColor: colors.primary_buttons,
              transition: "none",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderColor: colors.primary_buttons,
              transition: "none",
            },
            "&.Mui-error:hover:before": {
              borderColor: `${colors.error_state} !important`,
              transition: "none",
              outline: "none",
            },
            "&.Mui-error:hover:after": {
              borderColor: `${colors.error_state} !important`,
              transition: "none",
              outline: "none",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            fontSize: "14px",
            backgroundColor: "transparent",
            "&:focus": { backgroundColor: "transparent" },
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          track: {
            backgroundColor: colors.gray_text,
          },
          rail: {
            backgroundColor: colors.bg_gray,
          },
          root: {
            height: "10px",
          },
          thumb: {
            height: "22px",
            width: "22px",
            "&:hover": {
              boxShadow: "none",
            },
            "&.Mui-active": {
              boxShadow: "none",
            },
            "&.Mui-focusVisible": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-error": {
              color: "rgba(0, 0, 0, 0.6) !important",
            },
          },
        },
      },
    },
    palette: {
      primary: {
        light: colors.primary_buttons,
        main: colors.primary_buttons,
        dark: colors.primary_buttons,
        contrastText: "#fff",
      },
      secondary: {
        light: colors.secondary,
        main: colors.secondary,
        dark: colors.secondary,
        contrastText: "#fff",
      },
      green_luka: {
        light: colors.green_luka,
        main: colors.green_luka,
        dark: colors.green_luka,
        contrastText: "#fff",
      },
      primary_a: {
        light: colors.primary_buttons_a,
        main: colors.primary_buttons_a,
        dark: colors.primary_buttons_a,
        contrastText: colors.primary_buttons,
      },
      aqua_blue: {
        light: colors.aqua_blue,
        main: colors.aqua_blue,
        dark: colors.aqua_blue,
        contrastText: "#fff",
      },
      white: {
        light: colors.white,
        main: colors.white,
        dark: colors.white,
        contrastText: colors.primary_buttons,
      },
    },
    typography: {
      fontFamily: "Open SansVariable",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1900,
        carousel: 980,
      },
    },
  });

  function setColor() {
    let styles = "";
    for (const key in colors) {
      //@ts-ignore
      styles += `--${key}: ${colors[key]};`;
    }

    return css`
      :root {
        ${styles}
      }
      ${globalStyle};
    `;
  }
  const color = setColor();

  return (
    <ThemeProvider theme={themenew}>
      <>
        <CssBaseline />
        <Global styles={color} />
        {children}
      </>
    </ThemeProvider>
  );
};

export default ThemeLuka;
