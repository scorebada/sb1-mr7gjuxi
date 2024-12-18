import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
  onTap: () => void;
  children: React.ReactNode;
  style?: any;
}

export function Button({ onTap, children, style }: ButtonProps) {
  return (
    <button
      style={[styles.button, style]}
      onTap={onTap}
    >
      {children}
    </button>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});