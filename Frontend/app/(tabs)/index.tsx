import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { AppText } from "@/components/ui/AppText";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { MoodSelector, MoodValue } from "@/components/mood/MoodSelector";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function HomeScreen() {
  const [mood, setMood] = useState<MoodValue | null>(null);

  const saveCheckIn = () => {
    if (!mood) {
      Alert.alert("Choose a mood", "Pick the mood that feels closest to today.");
      return;
    }
    Alert.alert("Daily Glow", "Your mood check-in is captured locally for this prototype. 🌱");
  };

  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <AppText variant="caption" color={colors.textSecondary}>YOUR PERSONAL WELLBEING SPACE</AppText>
          <AppText variant="display" weight="bold">SoulLume <AppText variant="display">🌱</AppText></AppText>
          <AppText color={colors.textSecondary}>A little space to understand your life.</AppText>
        </View>
      </View>

      <Card tone="lavender">
        <View style={styles.scoreRow}>
          <View style={styles.scoreCopy}>
            <AppText variant="label" color={colors.primary} weight="semibold">YOUR LIFE SCORE</AppText>
            <AppText variant="display" weight="bold">--<AppText variant="heading"> / 100</AppText></AppText>
            <AppText variant="caption" color={colors.textSecondary}>Your score will take shape as you log.</AppText>
          </View>
          <View style={styles.glowOrb}><AppText style={styles.orbEmoji}>✨</AppText></View>
        </View>
        <AppText variant="caption" color={colors.textSecondary}>Your wellbeing is more than one number. Explore the patterns behind it.</AppText>
      </Card>

      <Card>
        <SectionHeader title="How are you feeling?" subtitle="A quick check-in is enough for today." />
        <MoodSelector value={mood} onChange={setMood} />
        <Button label="Save my Daily Glow" onPress={saveCheckIn} fullWidth />
        <AppText variant="caption" color={colors.textSecondary} style={styles.center}>
          Optional extras: journal, habits, sleep and activities.
        </AppText>
      </Card>

      <View style={styles.statsRow}>
        <StatCard label="Current streak" value="0 days" emoji="🌱" tone="sage" />
        <StatCard label="Average sleep" value="-- hrs" emoji="🌙" tone="sunshine" />
      </View>

      <Card tone="sage">
        <SectionHeader title="Your SoulLume Journey" subtitle="Your personal world grows with meaningful check-ins." />
        <View style={styles.garden}>
          <AppText style={styles.gardenEmoji}>🌱　🌷　🌿　🪴</AppText>
          <AppText variant="label" weight="semibold">A seed of self-understanding</AppText>
          <AppText variant="caption" color={colors.textSecondary}>Keep showing up gently. Your garden is just getting started.</AppText>
        </View>
      </Card>

      <View style={styles.section}>
        <SectionHeader title="Your week at a glance" subtitle="Insights appear after you have enough entries." actionLabel="View analysis" onActionPress={() => Alert.alert("Analysis", "Analysis navigation will be wired in the next integration step.")} />
        <Card>
          <View style={styles.weekRow}>
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <View key={`${day}-${index}`} style={styles.day}>
                <View style={[styles.dayDot, index === 2 && styles.dayDotToday]}>
                  <AppText>{index === 2 ? "•" : ""}</AppText>
                </View>
                <AppText variant="caption" color={colors.textSecondary}>{day}</AppText>
              </View>
            ))}
          </View>
          <AppText variant="caption" color={colors.textSecondary}>No pattern to show yet. Log a few days to begin.</AppText>
        </Card>
      </View>

      <Card tone="peach">
        <View style={styles.calmRow}>
          <View style={styles.calmCopy}>
            <AppText variant="heading" weight="semibold">Need a softer moment?</AppText>
            <AppText variant="label" color={colors.textSecondary}>Try a short breathing or grounding activity in Calm Me.</AppText>
          </View>
          <AppText style={styles.calmEmoji}>🫧</AppText>
        </View>
        <Button label="Explore Calm Me" variant="secondary" onPress={() => Alert.alert("Calm Me", "Calm Me activities will be added in the next screen implementation.")} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { gap: spacing.xs },
  scoreRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  scoreCopy: { flex: 1, gap: 5 },
  glowOrb: { width: 74, height: 74, borderRadius: 40, backgroundColor: "#D9CDE8", alignItems: "center", justifyContent: "center" },
  orbEmoji: { fontSize: 33 },
  center: { textAlign: "center" },
  statsRow: { flexDirection: "row", gap: spacing.md },
  garden: { alignItems: "center", gap: spacing.sm, paddingVertical: spacing.sm },
  gardenEmoji: { fontSize: 28, lineHeight: 42 },
  section: { gap: spacing.md },
  weekRow: { flexDirection: "row", justifyContent: "space-between" },
  day: { alignItems: "center", gap: 7 },
  dayDot: { width: 27, height: 27, borderRadius: 15, backgroundColor: colors.surfaceMuted, alignItems: "center", justifyContent: "center" },
  dayDotToday: { backgroundColor: colors.primarySoft, borderWidth: 1, borderColor: colors.primary },
  calmRow: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  calmCopy: { flex: 1, gap: spacing.xs },
  calmEmoji: { fontSize: 35 },
});
