import React, { Dispatch, ReactNode } from "react";

export type Props={
    children:ReactNode
}

export interface ThemeData{
    theme:string
}

export type ThemeContext={
    setTheme:React.Dispatch<React.SetStateAction<ThemeData>>,
    theme:ThemeData
}
