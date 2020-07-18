import React from "react";
import { View } from "react-native";
import { Container, Button, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";
import { Box } from "../../components/Theme";

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button onPress={() => alert("Signup")} variant="transparent">
          <Box flexDirection="row" justifyContent="center">
            <Text color="white" variant="button">
              Don't have an account ?
            </Text>
            <Text marginLeft="s" color="primary" variant="button">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
