import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { User } from "../../types/user";

interface Avatar3DProps {
  user: User;
  size?: number;
  animated?: boolean;
}

export function Avatar3D({ user, size = 120, animated = true }: Avatar3DProps) {
  return (
    <gridLayout 
      style={[
        styles.container,
        {
          width: size,
          height: size,
        }
      ]}
    >
      {user.avatar.model3dUrl ? (
        <webView
          src={user.avatar.model3dUrl}
          style={styles.model3d}
        />
      ) : (
        <image
          src={user.avatar.url}
          style={[
            styles.fallbackImage,
            animated && styles.animated
          ]}
        />
      )}
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  model3d: {
    width: '100%',
    height: '100%',
  },
  fallbackImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  animated: {
    animation: 'pulse 2s infinite',
  },
});