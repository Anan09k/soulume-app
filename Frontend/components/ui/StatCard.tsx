import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "@/components/ui/AppText";
import { Card } from "@/components/ui/Card";
import { colors } from "@/constants/colors";

type Props = {
  label: string;
  value: string;
  detail?: string;
  emoji?: string;
  tone?: "plain" | "lavender" | "sage" | "peach" | "sunshine";
};

export function StatCard({ label, value, detail, emoji, tone = "plain" }: Props) {
  return (
    <Card tone={tone} style={styles.card}>
      <View style={styles.top}>
        {emoji ? <AppText>{emoji}</AppText> : null}
        <AppText variant="caption" color={colors.textSecondary}>{label}</AppText>
      </View>
      <AppText variant="title" weight="bold">{value}</AppText>
      {detail ? <AppText variant="caption" color={colors.textSecondary}>{detail}</AppText> : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, minWidth: 135, gap: 9 },
  top: { flexDirection: "row", alignItems: "center", gap: 7 },
});
