import React, { ReactNode } from "react";

export type Props={
    children:ReactNode
}

export type ThemeContextType={
    setTheme:React.Dispatch<React.SetStateAction<string>>,
    theme:string
}
