import { useContext,createContext } from "react";

export const ThemeContext=createContext(
    {
     themeMode:'light',
     lightTheme: ()=>{},
     darkTheme : ()=>{}
    }
)

 export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}

//now u need to import themecontext.js only and can use both provider and use context togehter
