import React from "react";

import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";

const AuthenticationStack = createStackNavigator();
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),

  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationNavigator = ({}) => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name={"OnBoarding"} component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
