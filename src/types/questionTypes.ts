import { Dispatch, ReactNode } from "react"

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

export type AnsweredQuestion={
    questionID:string,
    option:string,
    isRight:boolean
}

export type QuestionsState={
    questions:Question[],
    currentQues:Question,
    currentIndex:number,
    answeredQuestions:AnsweredQuestion[]
}

export type QuestionAction={
    type:string,
    payload:any
}

export type QuestionsContext={
    quizState:QuestionsState,
    quizDispatch:Dispatch<QuestionAction>
}

export type Props={
    children:ReactNode
}