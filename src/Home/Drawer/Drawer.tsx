import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { RoundedIconButton } from "../../components";
import { Box, Text, theme } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const aspectRatio = 750 / 1125;
const { width: wWidth } = Dimensions.get("window");
const height = wWidth * aspectRatio;
export const DRAWER_WIDTH = wWidth * 0.8;

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
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "user",
    label: "Notification History",
    screen: "NotificationHistory",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
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
          flexDirection="row"
          justifyContent="space-between"
          padding="xl"
        >
          <RoundedIconButton
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => {}}
            size={24}
            iconRatio={1}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => {}}
            size={24}
            iconRatio={1}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
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
            top={-theme.borderRadii.m}
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

          {items.map((item, _) => {
            return <DrawerItem key={item.screen} {...item} />;
          })}
        </Box>
      </Box>

      <Box
        width={DRAWER_WIDTH}
        height={height * 0.61}
        overflow="hidden"
        flex={0.2}
        backgroundColor="white"
      >
        <Image
          source={require("../../components/assets/patterns/ptr.jpg")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: DRAWER_WIDTH,
            left: 0,
            right: 0,
            top: -height * (1 - 0.6),
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
