import { Feather as Icon } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { RoundedIcon } from "../../../components";
import { Box, useTheme } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?: string | boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
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
          <RoundedIcon
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
