import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Avatar } from '../components/common/Avatar';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import type { MainStackParamList } from '../navigation/types';
import type { FrameNavigationProp } from "react-nativescript-navigation";

type ProfileScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Profile">;
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <scrollView>
      <stackLayout style={styles.container}>
        <Card style={styles.header}>
          <Avatar 
            source="https://i.pravatar.cc/300"
            size={80}
          />
          <label className="text-2xl font-bold mt-4">John Doe</label>
          <label className="text-gray-600">john.doe@example.com</label>
        </Card>

        <Card>
          <label className="text-xl font-bold mb-2">Account Settings</label>
          <Button onTap={() => navigation.navigate(ROUTES.SETTINGS)}>
            Edit Profile
          </Button>
        </Card>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
});