import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}

export function FormField({
  label,
  children,
  required,
  error,
}: FormFieldProps) {
  return (
    <stackLayout style={styles.container}>
      <label className={`text-neon-blue mb-2 ${required ? 'required' : ''}`}>
        {label}
      </label>
      {children}
      {error && (
        <label className="text-red-500 text-sm mt-1">
          {error}
        </label>
      )}
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});