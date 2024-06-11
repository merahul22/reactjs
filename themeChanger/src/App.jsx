
import { useState } from 'react'
import {ThemeProvider} from './Context/themeContext'
import Card from './Components/Card'
import Theme_Btn from './Components/Theme_btn'

function App() {
  const [themeMode,setThemeMode]=useState('light')
  function darkTheme(){

  }
  function lightTheme(){
    
  }

  useEffect(() => {
    document.querySelector("html").classList.remove('light','dark')
  document.querySelector("html").classList.add(themeMode)  
  }, [themeMode])
  

  return (
    <ThemeProvider value={{lightMode,darkTheme,lightTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <Theme_Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>

  
  )
}

export default App
