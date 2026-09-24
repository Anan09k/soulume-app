import React from "react";
import { AppText } from "@/components/ui/AppText";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Alert } from "react-native";

const tools = [
  { title: "Anxiety", emoji: "🌧️", detail: "A short grounding exercise" },
  { title: "Stage fear", emoji: "🎤", detail: "A confidence reset before a big moment" },
  { title: "Nail biting", emoji: "🌱", detail: "A pause-and-replace activity" },
  { title: "Anger", emoji: "🔥", detail: "Create a little space before responding" },
  { title: "Overwhelm", emoji: "🫧", detail: "Break the next step into something manageable" },
];

export default function CalmScreen() {
  return (
    <Screen>
      <AppText variant="display" weight="bold">Calm Me 🫧</AppText>
      <AppText color="#77727E">Choose a small supportive activity for this moment.</AppText>
      {tools.map((tool) => (
        <Card key={tool.title}>
          <SectionHeader title={`${tool.emoji} ${tool.title}`} subtitle={tool.detail} />
          <Button label="Try this tool" variant="secondary" onPress={() => Alert.alert(tool.title, "The guided activity and feedback flow will be implemented next.")} />
        </Card>
      ))}
      <AppText variant="caption" color="#77727E">SoulLume offers general wellbeing activities, not diagnosis or clinical treatment. If you feel unsafe or may hurt yourself, contact local emergency services or a trusted person now.</AppText>
    </Screen>
  );
}
