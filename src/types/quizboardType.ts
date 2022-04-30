import { Dispatch, ReactNode } from "react"

export type User={
    email:string,
    score:number
}

export type Props={
    children:ReactNode
}

export type BoardState={
    users:User[]
}
export type BoardContext ={
    boardState:BoardState,
    boardDispatch:Dispatch<BoardAction>
}

export type BoardAction={
    type:string,
    payload:any
}