import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";

type Variant = "body" | "caption" | "label" | "title" | "heading" | "display";

type Props = TextProps & {
  variant?: Variant;
  color?: string;
  weight?: "regular" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
};

const variantStyles = {
  body: { fontSize: typography.sizes.md, lineHeight: 23 },
  caption: { fontSize: typography.sizes.xs, lineHeight: 17 },
  label: { fontSize: typography.sizes.sm, lineHeight: 20 },
  title: { fontSize: typography.sizes.title, lineHeight: 36 },
  heading: { fontSize: typography.sizes.xl, lineHeight: 29 },
  display: { fontSize: typography.sizes.display, lineHeight: 41 },
};

const weightMap = {
  regular: typography.weights.regular,
  medium: typography.weights.medium,
  semibold: typography.weights.semibold,
  bold: typography.weights.bold,
};

export function AppText({
  variant = "body",
  color = colors.text,
  weight = "regular",
  style,
  children,
  ...rest
}: Props) {
  return (
    <Text
      {...rest}
      style={[styles.base, variantStyles[variant], { color, fontWeight: weightMap[weight] }, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: { includeFontPadding: false },
});
