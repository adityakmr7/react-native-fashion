import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Routes } from "../components/Navigation";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import PasswordChanged from "./PasswordChanged";
import SignUp from "./SignUp";
import Welcome, { assets as welcomeAssets } from "./Welcome";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = ({}) => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name={"OnBoarding"} component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
