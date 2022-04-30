import {BoardAction,BoardState} from '../types/quizboardType';

export const boardReducer=(state:BoardState,action:BoardAction)=>{
    switch(action.type){
        case "UPDATE":
            return{
                ...state,
                users:action.payload
            }
        default:
            return state;
    }

}