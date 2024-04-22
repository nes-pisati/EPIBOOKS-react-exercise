import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent'
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { useState } from 'react';
import Fantasy from './books/fantasy.json';
import SearchBarComponent from './components/SearchBar/SearchBarComponent'
import WelcomeComponent from './components/Welcome/WelcomeComponent';


function App() {

  const [books, setBooks] = useState(Fantasy)
  const [booksInit, setBooksInit] = useState(Fantasy)

  return (
    <>
      <NavbarComponent />
      <WelcomeComponent />
      <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit}/>
      <AllTheBooks allBooks={books}/>
    </>
  );
}

export default App;
