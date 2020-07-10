import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";
import Subslide from "./Subslide";
const { width, height } = Dimensions.get("window");

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,

    borderBottomRightRadius: BORDER_RADIUS,
  },

  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find  the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subtitle: "Hear it first, Wear it first",
    description:
      "Hating the cloth in yout wardrobe? Explore hundreds of outfit ideas!",
    color: "#BEECC4",
  },
  {
    title: "Excentri",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday!",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality!",
    color: "#FFDDDD",
  },
];

const OnBoarding = ({}) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  // TODO: use ScrollEvent
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal={true}
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          {slides.map(({ title }, i) => {
            return <Slide key={i} right={!!(i % 2)} {...{ title }} />;
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, i) => {
            return (
              <Subslide
                key={i}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (i + 1), animated: true });
                  }
                }}
                last={i === slides.length - 1}
                {...{ subtitle, description }}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoarding;
