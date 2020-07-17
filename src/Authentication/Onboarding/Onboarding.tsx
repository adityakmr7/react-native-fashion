import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  multiply,
  divide,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import Subslide from "./Subslide";
const { width } = Dimensions.get("window");
import Dot from "./Dot";
import { theme } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,

    borderBottomRightRadius: theme.borderRadii.xl,
  },

  footer: {
    flex: 1,
  },

  footerContent: {
    flex: 1,

    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,

    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find  the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../../assets/1.png"),
      width: 2513,
      height: 4083,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it first, Wear it first",
    description:
      "Hating the cloth in your wardrobe? Explore hundreds of outfit ideas!",
    color: "#BEECC4",
    picture: {
      src: require("../../../assets/2.png"),
      width: 2791,
      height: 4744,
    },
  },
  {
    title: "Excentri",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday!",
    color: "#FFE4D9",
    picture: {
      src: require("../../../assets/3.png"),
      width: 2738,
      height: 4544,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality!",
    color: "#FFDDDD",
    picture: {
      src: require("../../../assets/4.png"),
      width: 1757,
      height: 3000,
    },
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
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image
                source={picture.src}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}

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
