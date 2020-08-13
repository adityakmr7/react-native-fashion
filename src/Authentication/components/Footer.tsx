import React from "react";
import SocialLogin from "./SocialLogin";
import { Box, Text } from "../../components/Theme";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <TouchableWithoutFeedback
          onPress={() => alert("Signup")}
          variant="transparent"
        >
          <Text color="white" variant="button">
            <Text>{`${title} `}</Text>
            <Text marginLeft="s" color="primary" variant="button">
              {action}
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
