import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeRoutes } from "../components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import FavoritesOutfits from "./FavoritesOutfits";
import OutfitIdeas from "./OutfitIdeas";
const Drawer = createDrawerNavigator<HomeRoutes>();

export { assets } from "./Drawer";
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoritesOutfits" component={FavoritesOutfits} />
  </Drawer.Navigator>
);
