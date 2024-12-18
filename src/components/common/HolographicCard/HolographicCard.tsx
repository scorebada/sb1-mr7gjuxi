import * as React from "react";
import { StyleSheet, Animated } from "react-nativescript";
import { useGlowAnimation } from "./useGlowAnimation";
import { HolographicCardProps } from "./types";
import { styles } from "./styles";

export function HolographicCard({ 
  children, 
  glowColor = '#00f3ff',
  onPress 
}: HolographicCardProps) {
  const glowAnimation = useGlowAnimation();

  return (
    <Animated.View 
      style={[
        styles.card,
        {
          shadowColor: glowColor,
          shadowOpacity: glowAnimation,
        }
      ]}
      onTap={onPress}
    >
      {children}
    </Animated.View>
  );
}