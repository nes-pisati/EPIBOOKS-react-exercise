import { createContext, useState } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode)

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleIsDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}