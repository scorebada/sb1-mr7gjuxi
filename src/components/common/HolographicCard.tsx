import * as React from "react";
import { StyleSheet, Animated } from "react-nativescript";

interface HolographicCardProps {
  children: React.ReactNode;
  glowColor?: string;
  onPress?: () => void;
}

export function HolographicCard({ 
  children, 
  glowColor = '#00f3ff',
  onPress 
}: HolographicCardProps) {
  const glowAnimation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnimation, {
          toValue: 1,
          duration: 2000,
        }),
        Animated.timing(glowAnimation, {
          toValue: 0,
          duration: 2000,
        }),
      ])
    ).start();
  }, []);

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 16,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
  },
});