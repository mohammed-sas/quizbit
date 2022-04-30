import { useContext ,useReducer,createContext} from "react";
import { QuizboardContext,Props } from "../types/quizboardType";
import {boardReducer} from '../reducer'

const QuizboardContext = createContext<QuizboardContext>(
  {} as QuizboardContext
);

const QuizboardProvider:React.FC<Props>=({children})=>{
    const [boardState,boardDispatch] = useReducer(boardReducer,{
        users:[],
    });
    
    return <QuizboardContext.Provider value={{boardState,boardDispatch}}>{children}</QuizboardContext.Provider>
}


const useQuizboard=()=>useContext(QuizboardContext);

export {QuizboardProvider,useQuizboard};