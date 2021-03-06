import { useReducer, createContext, ReactNode, useContext } from "react";
import { quizReducer } from "../reducer";
import { QuestionsContext,Props } from "../types/questionTypes";



const QuizContext = createContext<QuestionsContext>({} as QuestionsContext);

const QuizProvider: React.FC<Props> = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    questions: [],
    currentQues: {
      questionID: "",
      statement: "",
      options: [],
      points: 0,
    },
    currentIndex: 0,
    answeredQuestions:[]
  });
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
