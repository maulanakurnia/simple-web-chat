import theme from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";

const font =
  "Roboto, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: font,
    body: font,
  },
  styles: {
    global: (props: any) => ({
      // @ts-ignore
      ...theme.styles.global(props),
      ".deleted": {
        color: "#ff8383 !important",
        fontStyle: "normal !important",
      },
      ".inserted": {
        color: "#b5f4a5 !important",
        fontStyle: "normal !important",
      },
      body: {
        color: mode("#363537", "#929497")(props),
        bg: mode("#FFF", "#0f1117")(props),
        transition: "background 0.5s, color 0.6s",
        fontSize: "17px",
      },
      header: {
        bg: mode("#FFF", "#0f1117")(props),
      },
    }),
  },
  mdx: {
    h1: {
      mt: "2rem",
      mb: ".25rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      fontSize: "1.875rem",
      letterSpacing: "-.025em",
    },
    h2: {
      mt: "2rem",
      mb: "0.5rem",
      lineHeight: 1,
      fontWeight: "semibold",
      fontSize: "1.5rem",
      letterSpacing: "-.025em",
      "& + h3": {
        mt: "1.5rem",
      },
    },
    h3: {
      mt: "3rem",
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.25rem",
      letterSpacing: "-.025em",
    },
    h4: {
      mt: "3rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem",
    },
    a: {
      color: "teal.500",
      fontWeight: "semibold",
      transition: "color 0.15s",
      transitionTimingFunction: "ease-out",
      _hover: {
        color: "teal.600",
      },
    },
    p: {
      mt: "1.25rem",
      lineHeight: 1.7,
      "blockquote &": {
        mt: 0,
      },
    },
    hr: {
      my: "4rem",
    },
    blockquote: {
      bg: "orange.100",
      borderWidth: "1px",
      borderColor: "orange.200",
      rounded: "lg",
      px: "1.25rem",
      py: "1rem",
      my: "1.5rem",
    },
    ul: {
      mt: "1.5rem",
      ml: "1.25rem",
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: "0.25rem",
      },
    },
    code: {
      color: "purple.500",
      rounded: "sm",
      px: "1",
      py: "2px",
      whiteSpace: "nowrap",
      lineHeight: "normal",
      bg: "gray.50",
      "blockquote &": {
        bg: "transparent",
      },
    },
  },
};

export default customTheme;
