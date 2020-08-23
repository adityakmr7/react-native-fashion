import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Button } from "../../components";
import { StackNavigationProps } from "../../components/Navigation";
import { Box, Text, useTheme } from "../../components/Theme";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/3.png"),
  width: 3383,
  height: 4500,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<"Welcome">) => {
  const theme = useTheme();
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
            onPress={() => navigation.navigate("SignUp")}
            label="Join Us, It's Free"
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="secondary">
              Forgot password
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
