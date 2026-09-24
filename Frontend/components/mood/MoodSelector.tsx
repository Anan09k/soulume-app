import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText } from "@/components/ui/AppText";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

export const MOODS = [
  { value: "great", emoji: "😄", label: "Great" },
  { value: "okay", emoji: "🙂", label: "Okay" },
  { value: "low", emoji: "😔", label: "Low" },
  { value: "anxious", emoji: "😰", label: "Anxious" },
  { value: "angry", emoji: "😠", label: "Angry" },
] as const;

export type MoodValue = (typeof MOODS)[number]["value"];

type Props = { value: MoodValue | null; onChange: (value: MoodValue) => void };

export function MoodSelector({ value, onChange }: Props) {
  return (
    <View style={styles.row}>
      {MOODS.map((mood) => {
        const selected = value === mood.value;
        return (
          <Pressable
            key={mood.value}
            accessibilityRole="button"
            accessibilityLabel={`Mood ${mood.label}`}
            accessibilityState={{ selected }}
            onPress={() => onChange(mood.value)}
            style={[styles.option, selected && styles.selected]}
          >
            <AppText style={styles.emoji}>{mood.emoji}</AppText>
            <AppText variant="caption" weight={selected ? "semibold" : "regular"} color={selected ? colors.primary : colors.textSecondary}>
              {mood.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", gap: spacing.xs },
  option: {
    flex: 1,
    minHeight: 78,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: spacing.sm,
  },
  selected: { borderColor: colors.primary, backgroundColor: colors.primarySoft, borderWidth: 2 },
  emoji: { fontSize: 25, lineHeight: 31 },
});
