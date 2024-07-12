import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { generateLeaderboard, UserScore } from "@/utils/SampleLeaderboard";
import { ThemedViewCard } from "@/components/ThemedViewCard";

const userScoreComponent: ListRenderItem<UserScore> = ({ item }) => (
  <ThemedViewCard style={styles.scoreContainer}>
    <ThemedText style={{ flex: 1, flexWrap: "wrap" }}>{item.name}</ThemedText>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <ThemedText>
        Score: <ThemedText type="defaultSemiBold">{item.score}</ThemedText>
      </ThemedText>
      <ThemedText>
        Duration(Hour):{" "}
        <ThemedText type="defaultSemiBold">{item.duration}</ThemedText>
      </ThemedText>
    </View>
  </ThemedViewCard>
);

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<UserScore[]>([]);
  useEffect(() => {
    setLeaderboard(generateLeaderboard());
  }, []);

  return (
    <ThemedView style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 16 }}
        style={{ paddingHorizontal: 8 }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        data={leaderboard}
        keyExtractor={(item) => item.id.toString()}
        renderItem={userScoreComponent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreContainer: {
    padding: 10,
    borderRadius: 4,
    elevation: 3,
  },
});
