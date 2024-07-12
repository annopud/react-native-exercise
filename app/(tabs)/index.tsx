import { StyleSheet, TouchableHighlight, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Link replace href="/question" asChild>
        <TouchableHighlight>
          <View style={styles.touchableLink}>
            <ThemedText
              type="defaultSemiBold"
              darkColor="white"
              lightColor="white"
            >
              Question
            </ThemedText>
          </View>
        </TouchableHighlight>
      </Link>

      <Link href="/leaderboard" asChild>
        <TouchableHighlight>
          <View style={styles.touchableLink}>
            <ThemedText
              type="defaultSemiBold"
              darkColor="white"
              lightColor="white"
            >
              Leaderboard
            </ThemedText>
          </View>
        </TouchableHighlight>
      </Link>
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
    backgroundColor: "#556b2f",
    padding: 10,
    borderRadius: 4,
    elevation: 3,
  },
});
