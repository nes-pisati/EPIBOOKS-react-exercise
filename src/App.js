import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent'
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { useState } from 'react';
import Fantasy from './books/fantasy.json';
import SearchBarComponent from './components/SearchBar/SearchBarComponent'
import WelcomeComponent from './components/Welcome/WelcomeComponent';
import { ThemeProvider } from './contexts/ThemeContext';
import { Container, Row } from 'react-bootstrap';
import AddComment from './components/AddComment/AddComment';


function App() {

  const [books, setBooks] = useState(Fantasy)
  const [booksInit, setBooksInit] = useState(Fantasy)

  return (
    <ThemeProvider>
      <NavbarComponent />
      <WelcomeComponent />
      <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit}/>
      <Container className='d-flex gap-5'>
        <Row className='col-6'>
          <AllTheBooks allBooks={books}/>
        </Row>
        <Row className='col-5'>
          <h5>Hello</h5>
          
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
