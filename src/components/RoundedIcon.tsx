import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Box, Text, Theme } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
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
RoundedIcon.defaultProps = {
  iconSize: 0.7,
};
export default RoundedIcon;
