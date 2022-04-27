import {QuestionsState,QuestionAction} from '../types/questionTypes';

export const quizReducer=(state:QuestionsState,action:QuestionAction)=>{
    switch(action.type){
        case "INITIAL_STATE":
            return{
                ...action.payload
            }
        case "NEXT_QUES":
            return{
                ...state,
                currentQues:state.questions[state.currentIndex+1],
                currentIndex:state.currentIndex+1
            }
        default: return state;
    }
}