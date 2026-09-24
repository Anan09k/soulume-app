import React from "react";
import { AppText } from "@/components/ui/AppText";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function JournalScreen() {
  return (
    <Screen>
      <AppText variant="display" weight="bold">Your Journal 📖</AppText>
      <AppText color="#77727E">Capture a moment, in your own words.</AppText>
      <Card>
        <SectionHeader title="Daily entry" subtitle="The full mood, sleep and journal form will be implemented here." />
        <AppText variant="label">Planned fields: happiness, sadness, anxiety, anger, sleep, screen time, journal text, meals, activities and optional photos.</AppText>
      </Card>
      <Card tone="lavender">
        <SectionHeader title="Your pages" subtitle="Saved entries and scrapbook customization will appear here." />
        <AppText variant="label">Stickers, washi tape, frames and page themes will be unlocked with Soul Seeds.</AppText>
      </Card>
    </Screen>
  );
}
