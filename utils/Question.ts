export interface QuestionChoice {
  id: number;
  question: string;
  choiceList: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  selected?: boolean;
}

function generateQuestion() {
  let questionList: QuestionChoice[] = [];
  let answerId = 0;
  for (let questionId = 0; questionId < 20; questionId++) {
    let choiceList: Answer[] = [];
    for (let answerIndex = 0; answerIndex < 4; answerIndex++) {
      choiceList.push({
        id: ++answerId,
        text: `answer No. ${answerIndex + 1} of question No. ${questionId + 1}`,
      });
    }

    questionList.push({
      id: questionId + 1,
      question: `question No. ${questionId + 1}`,
      choiceList: choiceList,
    });
  }

  return questionList;
}

export function generateRamdomQuestion() {
  const questionList = generateQuestion();

  return [...questionList]
    .sort(() => Math.random() - 0.5)
    .map((question): QuestionChoice => {
      return {
        ...question,
        choiceList: [...question.choiceList].sort(() => Math.random() - 0.5),
      };
    });
}
