import React from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  tone?: "plain" | "lavender" | "sage" | "peach" | "sunshine";
  padding?: number;
};

const tones = {
  plain: colors.surface,
  lavender: colors.primarySoft,
  sage: colors.sageSoft,
  peach: colors.peachSoft,
  sunshine: colors.yellowSoft,
};

export function Card({ children, style, tone = "plain", padding = spacing.xl }: Props) {
  return <View style={[styles.card, { backgroundColor: tones[tone], padding }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
});
