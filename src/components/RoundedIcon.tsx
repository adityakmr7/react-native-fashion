import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Box, Text, Theme } from "./Theme";

interface RoundedIconProps {
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
      borderRadius="m"
      height={size}
      justifyContent="center"
      alignItems="center"
      marginLeft="xl"
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} color="white" {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
