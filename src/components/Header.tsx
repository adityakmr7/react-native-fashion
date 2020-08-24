import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
}

const Header = ({ left, right, title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      flexDirection="row"
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
        size={24}
        iconRatio={1}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
        size={24}
        iconRatio={1}
      />
    </Box>
  );
};

export default Header;
