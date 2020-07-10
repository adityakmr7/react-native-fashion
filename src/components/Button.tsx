import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";

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
  const backgroundColor =
    varient === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = varient === "primary" ? "white" : "#0C0D34";
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
