import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import OutfitIdeas from "./OutfitIdeas";
const Drawer = createDrawerNavigator();

export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
