import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";
import { Box } from "../../components/Theme";
import { useSpring } from "./Animations";

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}
const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = wWidth * (425 / 294);
const borderRadius = 24;
const Card = ({ position, onSwipe, source, step }: CardProps) => {
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  // const translateX = withSpring();
  const translateX = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-wWidth, 0, width],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
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
            overflow: "hidden",
          }}
        >
          <Animated.Image
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
            {...{ source }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
