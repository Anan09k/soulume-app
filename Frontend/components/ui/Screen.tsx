import React from "react";
import { ScrollView, ScrollViewProps, StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  contentContainerStyle?: ScrollViewProps["contentContainerStyle"];
  style?: ViewProps["style"];
};

export function Screen({ children, scroll = true, contentContainerStyle, style }: Props) {
  return (
    <SafeAreaView edges={["top"]} style={[styles.safe, style]}>
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.content, contentContainerStyle]}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, styles.fill]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: 36, gap: spacing.xl },
  fill: { flex: 1 },
});
