import React, { ReactNode } from "react";
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
  varient: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ varient, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    varient === "primary"
      ? theme.colors.primary
      : varient === "transparent"
      ? "transparent"
      : theme.colors.grey;

  const color =
    varient === "primary" ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { varient: "default" };

export default Button;
