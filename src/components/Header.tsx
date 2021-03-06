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
  dark: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
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
        {...{ color, backgroundColor }}
        onPress={left.onPress}
        size={44}
        iconRatio={0.5}
      />
      <Text {...{ color }} variant="header">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        onPress={right.onPress}
        size={44}
        iconRatio={0.5}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
