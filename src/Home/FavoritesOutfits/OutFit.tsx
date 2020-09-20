import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import { Box } from "../../components/Theme";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface OutFitProps {
  color: string;
  aspectRatio: number;
  id: number;
  width: number;
}

const OutFit = ({
  color: backgroundColor,
  aspectRatio,
  id,
  width,
}: OutFitProps) => {
  const theme = useTheme();
  return (
    <Box
      marginBottom="m"
      borderRadius="m"
      style={{ backgroundColor, width, height: width * aspectRatio }}
    ></Box>
  );
};

export default OutFit;
