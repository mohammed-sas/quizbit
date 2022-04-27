import { QuestionsState, QuestionAction } from "../types/questionTypes";

export const quizReducer = (state: QuestionsState, action: QuestionAction) => {
  switch (action.type) {
    case "INITIAL_STATE":
      return {
        ...action.payload,
      };
    case "NEXT_QUES":
      return {
        ...state,
        currentQues: state.questions[state.currentIndex + 1],
        currentIndex: state.currentIndex + 1,
      };
    case "SELECTED":
        return{
            ...state,
            answeredQuestions:[...state.answeredQuestions,{...action.payload}]
        }
    default:
      return state;
  }
};
