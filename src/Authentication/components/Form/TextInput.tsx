import React, { forwardRef, RefObject } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, useTheme } from "../../../components/Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?: string | boolean;
  error?: string;
}

const TextInput = forwardRef(
  ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];
    return (
      <Box
        padding="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius="s"
        borderColor={reColor}
        height={48}
        alignItems="center"
        flexDirection="row"
      >
        <Box padding="s">
          <Icon size={16} {...{ color }} name={icon} />
        </Box>

        <Box flex={1}>
          <RNTextInput
            {...{ ref }}
            placeholderTextColor={color}
            {...props}
            underlineColorAndroid="transparent"
          />
        </Box>

        {touched && (
          <Box
            backgroundColor={!error ? "primary" : "danger"}
            width={SIZE}
            borderRadius="m"
            height={SIZE}
            justifyContent="center"
            alignItems="center"
            marginLeft="xl"
          >
            <Icon size={12} name={!error ? "check" : "x"} color="white" />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
