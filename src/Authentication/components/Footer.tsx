import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components/Theme";
import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <Box marginTop="xl" >
      <SocialLogin />
      <Box alignItems="center">
        <BorderlessButton {...{ onPress }}>
          <Text color="white" variant="button">
            <Text>{`${title} `}</Text>
            <Text marginLeft="s" color="primary" variant="button">
              {action}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </Box>
  );
};

export default Footer;
