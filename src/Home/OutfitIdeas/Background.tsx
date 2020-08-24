import { useTheme } from "@shopify/restyle";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Box } from "../../components/Theme";

interface BackgroundProps {}
const styles = StyleSheet.create({
  image: {},
});

const Background = ({}: BackgroundProps) => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius="xl"
        ></Box>
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />

        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          source={require("./assets/ptr2.png")}
        />
      </Box>

      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
        ></Box>
      </Box>
    </View>
  );
};

export default Background;
