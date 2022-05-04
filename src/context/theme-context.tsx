import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {Props,ThemeData,ThemeContext} from '../types/themeType';
const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const ThemeProvider:React.FC<Props>=({children})=>{
    const [theme,setTheme] = useState<ThemeData>({
        theme : "dark"
    })
    return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
}


const useTheme=()=>useContext(ThemeContext);


export{ThemeProvider,useTheme};