import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { ROUTES } from '../constants/routes';
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ScreenOne } from "../screens/ScreenOne";
import { ScreenTwo } from "../screens/ScreenTwo";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName={ROUTES.HOME}
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name={ROUTES.HOME}
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name={ROUTES.PROFILE}
                component={ProfileScreen}
            />
            <StackNavigator.Screen
                name={ROUTES.SCREEN_ONE}
                component={ScreenOne}
            />
            <StackNavigator.Screen
                name={ROUTES.SCREEN_TWO}
                component={ScreenTwo}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);