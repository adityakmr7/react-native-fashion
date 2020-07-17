import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
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
    varient === "primary" ? theme.colors.primary : theme.colors.grey;

  const color = varient === "primary" ? theme.colors.white : theme.colors.text;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { varient: "default" };

export default Button;
