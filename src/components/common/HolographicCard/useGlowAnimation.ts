import * as React from "react";
import { Animated } from "react-nativescript";

export function useGlowAnimation(duration: number = 2000) {
  const glowAnimation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnimation, {
          toValue: 1,
          duration,
        }),
        Animated.timing(glowAnimation, {
          toValue: 0,
          duration,
        }),
      ])
    ).start();
  }, [duration]);

  return glowAnimation;
}