import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Box } from "../../components/Theme";
import Footer from "./Footer";
import OutFit from "./OutFit";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const defaultOutfits = [
  { id: 1, color: "#BFEAF5", aspectRatio: 1 },
  { id: 2, color: "#BEECC4", aspectRatio: 200 / 145 },
  { id: 3, color: "#D5C3BB", aspectRatio: 1 },
  { id: 4, color: "#FFDDDD", aspectRatio: 180 / 145 },
  { id: 5, color: "#D5C3BB", aspectRatio: 1 },
  { id: 6, color: "#F3F0EF", aspectRatio: 120 / 145 },
  { id: 7, color: "#BFEAF5", aspectRatio: 120 / 145 },
  { id: 8, color: "#DEEFC4", aspectRatio: 210 / 145 },
  { id: 9, color: "#D5C3BB", aspectRatio: 160 / 145 },
];

const FavoritesOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoritesOutfits">) => {
  const [outfits, setOutfits] = useState(defaultOutfits);
  const [selectedOutfits, setSelectedOutfits] = useState<typeof defaultOutfits>(
    []
  );
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const [footerHeight, setFooterHeight] = useState<number>(0);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Favorite Outfits"
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
        <ScrollView
          contentContainerStyle={{
            paddingBottom: footerHeight,
            paddingHorizontal: theme.spacing.m,
          }}
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              {outfits
                .filter((_, i) => i % 2 !== 0)
                .map((outfit) => (
                  <OutFit width={width} key={outfit.id} {...outfit} />
                ))}
            </Box>
            <Box>
              {outfits
                .filter((_, i) => i % 2 === 0)
                .map((outfit) => (
                  <OutFit {...outfit} width={width} key={outfit.id} />
                ))}
            </Box>
          </Box>
        </ScrollView>
        <Box
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
        >
          <Footer label="Add to Favorites" onPress={() => null} />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoritesOutfits;
