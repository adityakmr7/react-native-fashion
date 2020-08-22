import { Feather as Icon } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Container, Text } from "../components";
import { Routes } from "../components/Navigation";
import { Box } from "../components/Theme";
import ClosedButton from "./components/CloseButton";
import Footer from "./components/Footer";

interface PasswordChangedProps {}
const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProp<Routes, "PasswordChanged">) => {
  const footer = (
    <Footer
      onPress={() => {
        navigation.navigate("SignUp");
      }}
      title="Don't have an account?"
      action="Sign Up Here"
    />
  );
  return (
    <Container
      pattern={0}
      footer={
        <Box justifyContent="center" alignItems="center">
          <ClosedButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center">
        <Box
          backgroundColor="primaryLight"
          opacity="0.5"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        >
          <Text color="primary" textAlign="center" fontSize={32}>
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Box padding="l">
          <Text marginBottom="l" textAlign="center" variant="title1">
            Welcome back
          </Text>
          <Text marginBottom="l" textAlign="center" variant="body">
            Use your credentials below and login to your account.
          </Text>
        </Box>

        <Box marginTop="m" alignItems="center">
          <Button
            varient="primary"
            onPress={() => navigation.navigate("Login")}
            label="Login into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
