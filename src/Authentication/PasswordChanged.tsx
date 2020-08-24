import React from "react";
import {
  Button,
  Container,
  RoundedIcon,
  RoundedIconButton,
  Text,
} from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import { Box } from "../components/Theme";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            iconRatio={0.5}
            backgroundColor="white"
            color="secondary"
            onPress={() => navigation.pop()}
            name="x"
            size={60}
          />
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
        <RoundedIcon
          iconRatio={0.5}
          color="primary"
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
        />

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
