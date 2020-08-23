import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeRoutes } from "../components/Navigation";
import OutfitIdeas from "./OutfitIdeas";
const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
