import React from "react";
import { AppText } from "@/components/ui/AppText";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { View } from "react-native";

export default function AnalysisScreen() {
  return (
    <Screen>
      <AppText variant="display" weight="bold">Your patterns 🔎</AppText>
      <AppText color="#77727E">Notice what tends to move with your mood, over time.</AppText>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <StatCard label="Life Score" value="--" emoji="✨" tone="lavender" />
        <StatCard label="Entries logged" value="0" emoji="📖" tone="sage" />
      </View>
      <Card>
        <SectionHeader title="Life Pattern Detector" subtitle="Patterns unlock when there is enough personal data." />
        <AppText variant="label">The analysis will compare mood with sleep, screen time, meals, habits and activities. Findings will be phrased as associations, not proof of cause.</AppText>
      </Card>
      <Card tone="sunshine">
        <SectionHeader title="Weekly & monthly Soul Journey" subtitle="A personal recap of the changes and moments you recorded." />
        <AppText variant="label">Your recap will include check-ins, recurring moods, habit progress, emerging patterns and a collectible visual keepsake.</AppText>
      </Card>
      <Card tone="peach">
        <SectionHeader title="Back to rhythm" subtitle="A gentle recovery plan after a habit interruption." />
        <AppText variant="label">Supportive suggestions will focus on restarting with a small step, without shame or punishment.</AppText>
      </Card>
    </Screen>
  );
}
