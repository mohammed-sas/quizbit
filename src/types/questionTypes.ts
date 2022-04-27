import { Dispatch } from "react"

export type Options={
    option:string,
    isRight:boolean
}

export type Question={
    questionID:string,
    statement:string,
    options:Options[],
    points:number,
}

export type QuestionsState={
    questions:Question[],
    currentQues:Question,
    currentIndex:number
}

export type QuestionAction={
    type:string,
    payload:any
}

export type QuestionsContext={
    quizState:QuestionsState,
    quizDispatch:Dispatch<QuestionAction>
}