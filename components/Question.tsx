import {
  Alert,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { generateRamdomQuestion, QuestionChoice } from "@/utils/Question";
import { useReducer } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

const questionRenderer = (
  question: QuestionChoice,
  index: number,
  answerListStateDispatch: React.Dispatch<Action>
) => (
  <View style={styles.questionContainer}>
    <ThemedText type="defaultSemiBold">
      {index + 1}. {question.question}
    </ThemedText>
    <View style={styles.choiceGroup}>
      {question.choiceList.map((answer, answerIndex) => (
        <TouchableOpacity
          key={answer.id}
          onPress={() => {
            answerListStateDispatch({
              questionId: question.id,
              choiceId: answer.id,
              questionIndex: index,
              answerIndex,
            });
          }}
        >
          <View style={styles.choice}>
            <Checkbox value={answer.selected ?? false}></Checkbox>
            <ThemedText style={{ flexShrink: 1 }}>
              {String.fromCharCode(65 + answerIndex)}. {answer.text}
            </ThemedText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const reducer = (state: QuestionChoice[], action: Action) => {
  const { questionId, choiceId, questionIndex, answerIndex } = action;
  const newState = [...state];
  newState[questionIndex] = {
    ...state[questionIndex],
  };

  newState[questionIndex].choiceList[answerIndex] = {
    ...state[questionIndex].choiceList[answerIndex],
    selected: !state[questionIndex].choiceList[answerIndex].selected,
  };

  return newState;
};

interface Action {
  questionId: number;
  choiceId: number;
  questionIndex: number;
  answerIndex: number;
}

export function Question() {
  const [answerListState, answerListStateDispatch] = useReducer(
    reducer,
    generateRamdomQuestion()
  );

  const createThreeButtonAlert = () => {
    if (Platform.OS !== "web") {
      return Alert.alert("Comfirmation", "Submit your answers?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => router.replace("/") },
      ]);
    }

    if (window.confirm("Submit your answers?")) {
      window.location.replace(window.location.origin);
    }
  };

  return (
    <>
      {/* <SafeAreaView style={styles.safeContainer}> */}
      <ThemedView style={styles.container}>
        <FlatList
          ListFooterComponent={() => (
            <Pressable style={styles.button} onPress={createThreeButtonAlert}>
              <Text style={styles.text}>Submit answers</Text>
            </Pressable>
          )}
          contentContainerStyle={{ paddingVertical: 16 }}
          style={{ paddingHorizontal: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          data={answerListState}
          keyExtractor={(testItem) => testItem.id.toString()}
          renderItem={({ item, index }) => {
            return questionRenderer(item, index, answerListStateDispatch);
          }}
        />
      </ThemedView>
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  choice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  choiceGroup: {
    gap: 8,
  },
  container: {
    flex: 1,
  },
  questionContainer: {
    gap: 8,
  },
  button: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  safeContainer: {
    flex: 1,
  },
});
