import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text } from "../../components/Theme";
import BorderlessTap from "./BorderlessTap";
interface CategoryProps {
  category: {
    color: string;
    title: string;
    id: string;
  };
}

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

const Category = ({
  category: { color: backgroundColor, title },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          ></View>
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
