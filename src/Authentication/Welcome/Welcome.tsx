import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import theme, { Box, Text } from "../../components/Theme";
import { Button } from "../../components";
import { StackNavigationProps, Routes } from "../../components/Navigation";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/3.png"),
  width: 3383,
  height: 4500,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <Box
          justifyContent="space-evenly"
          alignItems="center"
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            varient="primary"
            onPress={() => navigation.navigate("Login")}
            label="Have an account ? Login"
          />
          <Button
            varient="default"
            onPress={() => {}}
            label="Join Us, It's Free"
          />
          <Button
            varient="transparent"
            onPress={() => {}}
            label="Forgot Password"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
