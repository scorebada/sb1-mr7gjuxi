import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import type { MainStackParamList } from '../navigation/types';
import type { FrameNavigationProp } from "react-nativescript-navigation";

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <scrollView>
      <stackLayout style={styles.container}>
        <Card>
          <label className="text-2xl font-bold mb-2">Welcome</label>
          <label className="text-gray-600 mb-4">
            Explore our NativeScript React app
          </label>
          <Button onTap={() => navigation.navigate(ROUTES.PROFILE)}>
            View Profile
          </Button>
        </Card>

        <Card>
          <label className="text-xl font-bold mb-2">Quick Actions</label>
          <gridLayout columns="*, *" rows="auto" style={styles.grid}>
            <Button 
              style={styles.gridButton}
              onTap={() => navigation.navigate(ROUTES.SCREEN_ONE)}
            >
              Screen One
            </Button>
            <Button 
              style={styles.gridButton}
              onTap={() => navigation.navigate(ROUTES.SCREEN_TWO, { message: "From Home" })}
            >
              Screen Two
            </Button>
          </gridLayout>
        </Card>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  grid: {
    marginTop: 8,
  },
  gridButton: {
    margin: 4,
  },
});