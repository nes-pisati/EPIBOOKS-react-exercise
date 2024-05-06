import { createContext, useState } from "react";
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json'
import Horror from '../books/horror.json'
import Romance from '../books/romance.json'
import Scific from '../books/scifi.json'
import { ThemeContext } from "./ThemeContext";

export const bookCategory = createContext()

export const CategoryProvider = ({children}) => {

    const [bookList, setBookList] = useState([])
    const toggleFantasyList = () => setBookList(Fantasy)
    const toggleHistoryList = () => setBookList(History)
    const toggleHorrorList = () => setBookList(Horror)
    const toggleRomanceList = () => setBookList(Romance)
    const toggleScificList = () => setBookList(Scific)

    return (
        <ThemeContext.Provider value={{bookList, toggleFantasyList, toggleHistoryList, toggleHorrorList, toggleRomanceList, toggleScificList}}>
            {children}
        </ThemeContext.Provider>
    )
}