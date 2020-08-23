import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components/Theme";
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton onPress={() => onChange()}>
      <Box alignItems="center" flexDirection="row">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          justifyContent="center"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
