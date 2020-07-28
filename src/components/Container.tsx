import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { Box, useTheme } from "./Theme";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}
const aspectRatio = 750 / 1125;
const { width } = Dimensions.get("window");
const height = width * aspectRatio;
export const assets = [require("./assets/patterns/ptr.jpg")];

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
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
              source={assets[0]}
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
            source={assets[0]}
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
            {children}
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
