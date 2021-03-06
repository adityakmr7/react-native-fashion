import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image } from "react-native";
import { Header } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { Box, Text, theme } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const aspectRatio = 750 / 1125;
const { width: wWidth } = Dimensions.get("window");
const height = wWidth * aspectRatio;
export const DRAWER_WIDTH = wWidth * 0.8;
export const assets = [require("../../components/assets/patterns/ptr.jpg")];
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorites Outfit ",
    screen: "FavoritesOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "FavoritesOutfits",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "FavoritesOutfits",
    color: "pink",
  },
  {
    icon: "user",
    label: "Notification History",
    screen: "FavoritesOutfits",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "FavoritesOutfits",
    color: "secondary",
  },
];
interface DrawerProps {
  navigation: DrawerNavigationProp<HomeRoutes, "OutfitIdeas">;
}
const Drawer = ({ navigation }: DrawerProps) => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          //flexDirection="row"
          //justifyContent="space-between"
          //padding="xl"
        >
          <Header
            title="Menu"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>

      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderTopLeftRadius="xl"
          backgroundColor="white"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            alignSelf="center"
            top={-theme.borderRadii.xl + 30}
            style={{ borderRadius: 50 }}
            backgroundColor="pink"
            width={100}
            height={100}
          ></Box>
          <Box>
            <Text textAlign="center" variant="title1">
              Mike Hello
            </Text>
            <Text textAlign="center" variant="body">
              adityak@gmail.com
            </Text>
          </Box>

          {items.map((item, i) => {
            return <DrawerItem key={i} {...item} />;
          })}
        </Box>
      </Box>

      <Box
        width={DRAWER_WIDTH}
        height={height * 0.3}
        overflow="hidden"
        // flex={0.2}
        backgroundColor="white"
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            position: "absolute",
            bottom: 0,
            height: height / 3,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
