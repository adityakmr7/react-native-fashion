import React, { useState } from "react";
import { interpolate } from "react-native-reanimated";
import { useTransition } from "react-native-redash";
import { Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Box } from "../../components/Theme";
import Background from "./Background";
import Card from "./Card";
interface OutfitIdeasProps {}
const cards = [
  {
    index: 3,
  },
  {
    index: 2,
  },
  {
    index: 1,
  },
  {
    index: 0,
  },
];
const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{
          icon: "menu",
          onPress: () => navigation.openDrawer(),
        }}
        right={{
          icon: "shopping-bag",
          onPress: () => true,
        }}
      />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index }) =>
            index >= currentIndex && (
              <Card
                key={index}
                position={interpolate(index, {
                  inputRange: [aIndex, cards.length - 1],
                  outputRange: [0, 1],
                })}
                onSwipe={() => setCurrentIndex((prev) => prev + 1)}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
