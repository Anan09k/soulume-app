import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "@/components/ui/AppText";
import { spacing } from "@/constants/spacing";

type Props = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({ title, subtitle, actionLabel, onActionPress }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.copy}>
        <AppText variant="heading" weight="semibold">{title}</AppText>
        {subtitle ? <AppText variant="caption" color="#77727E">{subtitle}</AppText> : null}
      </View>
      {actionLabel && onActionPress ? (
        <AppText accessibilityRole="button" onPress={onActionPress} color="#67518C" weight="semibold">
          {actionLabel}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: spacing.md },
  copy: { flex: 1, gap: 4 },
});
