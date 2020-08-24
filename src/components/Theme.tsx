import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { TextStyle, ViewStyle } from "react-native";
import { Image } from "react-native-svg";
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | Image };

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    text: "rgba(12,13,52,0.4)",
    button: "#0C0D34",
    white: "white",
    grey: "rgba(12,13,52,0.05)",
    lightGrey: "#FAFAFA",
    darkGrey: "#8A8D90",
    danger: "#FF0058",
    primaryLight: "#E7F9F7",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      color: "text",
      fontFamily: "SFProDisplay-Medium",
    },
    header: {
      fontSize: 12,
      fontFamily: "SFProDisplay-Semibold",
      lineHeight: 24,
      color: "secondary",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
