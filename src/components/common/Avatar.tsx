import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface AvatarProps {
  source: string;
  size?: number;
}

export function Avatar({ source, size = 40 }: AvatarProps) {
  return (
    <image
      src={source}
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    objectFit: 'cover',
  },
});