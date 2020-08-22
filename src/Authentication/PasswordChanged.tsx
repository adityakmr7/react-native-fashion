import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Button, Container, Text } from "../components";
import { StackNavigationProps } from "../components/Navigation";
import { Box } from "../components/Theme";
import ClosedButton from "./components/CloseButton";

interface PasswordChangedProps {}
const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box justifyContent="center" alignItems="center">
          <ClosedButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box
        flex={1}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        paddingVertical="l"
      >
        <Box height={60} />
        <Box
          backgroundColor="primaryLight"
          opacity={0.5}
          justifyContent="center"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        >
          <Text color="primary" textAlign="center" fontSize={32}>
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Box padding="l">
          <Text marginBottom="l" textAlign="center" variant="title1">
            Password Changed
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
