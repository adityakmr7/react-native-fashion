import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, useTheme } from "./Theme";
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}
const aspectRatio = 750 / 1125;
const { width } = Dimensions.get("window");
const height = width * aspectRatio;
export const assets = [
  require("./assets/patterns/ptr.jpg"),
  require("./assets/patterns/ptr.jpg"),
  require("./assets/patterns/ptr.jpg"),
];

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <ScrollView scrollEnabled={false} style={{ height: height / aspectRatio }}>
      <Box paddingBottom="xl" flex={1} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>

        <Box marginBottom="xl" flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
          </Box>
        </Box>
        <Box paddingTop="xl" backgroundColor="secondary">
          {footer}
          <Box height={insets.bottom}></Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Container;
