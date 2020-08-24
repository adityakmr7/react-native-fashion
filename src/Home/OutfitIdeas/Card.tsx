import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { add } from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
  withSpring,
} from "react-native-redash";
import { Box } from "../../components/Theme";

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
}
const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = wWidth * (425 / 294);
const borderRadius = 24;
const Card = ({ position, onSwipe }: CardProps) => {
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      style={StyleSheet.absoluteFill}
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            transform: [
              {
                translateY,
              },
              { translateX },
              { scale },
            ],
            backgroundColor,
            width,
            height,
            borderRadius,
          }}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
