import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Button } from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import { MainStackParamList } from '../navigation/types';
import { commonStyles } from '../styles/common';

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    const handleAlert = () => Dialogs.alert("Tapped!");
    const handleNavigation = () => navigation.navigate(ROUTES.SCREEN_TWO, { message: "Hello, world!" });

    return (
        <flexboxLayout style={commonStyles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Hello World!
            </label>
            <Button onTap={handleAlert}>
                Tap me for an alert
            </Button>
            <Button onTap={handleNavigation}>
                Go to next screen
            </Button>
        </flexboxLayout>
    );
}