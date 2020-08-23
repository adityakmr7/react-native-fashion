import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Box, Text, Theme } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.8;
  return (
    <Box
      {...{ backgroundColor }}
      width={size}
      style={{ borderRadius: size / 2 }}
      height={size}
      justifyContent="center"
      alignItems="center"
    >
      <Text {...{ color }} style={{ width: iconSize, height: iconSize }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
