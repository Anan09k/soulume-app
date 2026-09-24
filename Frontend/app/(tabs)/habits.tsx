import React from "react";
import { AppText } from "@/components/ui/AppText";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HabitsScreen() {
  return (
    <Screen>
      <AppText variant="display" weight="bold">Little by little 🌿</AppText>
      <AppText color="#77727E">Build rhythms that support the life you want.</AppText>
      <Card>
        <SectionHeader title="Your habits" subtitle="Daily, weekly, fortnightly and monthly habits will live here." />
        <AppText variant="label">Habit creation, completion, streaks, history and a calendar/heatmap are planned for this screen.</AppText>
      </Card>
      <Card tone="sage">
        <SectionHeader title="Soul Seeds" subtitle="Rewards for meaningful actions, not mindless tapping." />
        <AppText variant="label">Complete habits to earn seeds and unlock garden pieces, journal stickers, themes and profile decorations.</AppText>
      </Card>
    </Screen>
  );
}
