import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    // update font
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});

interface ButtonProps {
  varient: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ varient, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    varient === "primary" ? theme.colors.primary : theme.colors.body;

  const color = varient === "primary" ? theme.colors.white : theme.colors.text;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { varient: "default" };

export default Button;
