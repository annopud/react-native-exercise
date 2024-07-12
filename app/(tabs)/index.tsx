import { StyleSheet, Pressable } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={() => {
          router.replace("/question");
        }}
        style={({ pressed }) => {
          const backgroundColor = pressed ? "#556b2f" : "#8bc34a";
          return {
            ...styles.touchableLink,
            backgroundColor,
          };
        }}
      >
        <ThemedText type="defaultSemiBold" darkColor="white" lightColor="white">
          Question
        </ThemedText>
      </Pressable>

      <Pressable
        onPress={() => {
          router.navigate("/leaderboard");
        }}
        style={({ pressed }) => {
          const backgroundColor = pressed ? "#556b2f" : "#8bc34a";
          return {
            ...styles.touchableLink,
            backgroundColor,
          };
        }}
      >
        <ThemedText type="defaultSemiBold" darkColor="white" lightColor="white">
          Leaderboard
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  touchableLink: {
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#8bc34a",
  },
});
