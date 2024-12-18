import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Button } from '../components/common/Button';
import { MainStackParamList } from '../navigation/types';
import { commonStyles } from '../styles/common';

type ScreenTwoProps = {
    route: RouteProp<MainStackParamList, "Two">,
    navigation: FrameNavigationProp<MainStackParamList, "Two">,
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
    return (
        <flexboxLayout style={[commonStyles.container, styles.container]}>
            <label style={commonStyles.text}>
                You're viewing screen two!
            </label>
            <label style={commonStyles.text}>
                Message: {route.params.message}
            </label>
            <Button onTap={() => navigation.goBack()}>
                Go back
            </Button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
    },
});