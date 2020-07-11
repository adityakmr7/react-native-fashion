import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import Subslide from "./Subslide";
const { width } = Dimensions.get("window");
import Dot from "./Dot";

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
    flex: 1,

    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,

    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find  the best outfit here!",
    color: "#BFEAF5",
    picture: require("../../../assets/1.png"),
  },
  {
    title: "Playful",
    subtitle: "Hear it first, Wear it first",
    description:
      "Hating the cloth in yout wardrobe? Explore hundreds of outfit ideas!",
    color: "#BEECC4",
    picture: require("../../../assets/2.png"),
  },
  {
    title: "Excentri",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday!",
    color: "#FFE4D9",
    picture: require("../../../assets/3.png"),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality!",
    color: "#FFDDDD",
    picture: require("../../../assets/4.png"),
  },
];

const OnBoarding = ({}) => {
  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();
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
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, i) => {
            return <Slide key={i} right={!!(i % 2)} {...{ title, picture }} />;
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                currentIndex={divide(x, width)}
                key={index}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            }}
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
    </View>
  );
};

export default OnBoarding;
