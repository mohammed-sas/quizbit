import { useContext ,useReducer,createContext} from "react";
import { BoardContext,Props } from "../types/quizboardType";
import {boardReducer} from '../reducer'

const QuizboardContext = createContext<BoardContext>(
  {} as BoardContext
);

const QuizboardProvider:React.FC<Props>=({children})=>{
    const [boardState,boardDispatch] = useReducer(boardReducer,{
        users:[],
    });
    
    return <QuizboardContext.Provider value={{boardState,boardDispatch}}>{children}</QuizboardContext.Provider>
}


const useQuizboard=()=>useContext(QuizboardContext);

export {QuizboardProvider,useQuizboard};