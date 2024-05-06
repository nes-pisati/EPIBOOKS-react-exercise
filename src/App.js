import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetail from './pages/BookDetail/BookDetail'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/Homepage/Homepage'


function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/details/:asin" element={<BookDetail/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
