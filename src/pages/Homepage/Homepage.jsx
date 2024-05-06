import React from 'react'
import NavbarComponent from '../../components/Navbar/NavbarComponent'
import AllTheBooks from '../../components/AllTheBooks/AllTheBooks';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent'
import WelcomeComponent from '../../components/Welcome/WelcomeComponent';
import SuggestedBookComponent from '../../components/SuggestedBook/SuggestedBookComponent';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Fantasy from '../../books/fantasy.json';
import History from '../../books/history.json'
import Horror from '../../books/horror.json'
import Romance from '../../books/romance.json'
import Scific from '../../books/scifi.json'
import FooterComponent from '../../components/Footer/FooterComponent';

export default function Homepage() {

    const [books, setBooks] = useState(Fantasy)
    const [booksInit, setBooksInit] = useState(Fantasy)

    return (
        <>
            <NavbarComponent />
            <WelcomeComponent />
            <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit} />
            <Container className='d-md-flex d-block gap-5 vh-100 mt-4 '>
                <Row className='col-12 col-lg-6 overflow-scroll order-1'>
                    <AllTheBooks allBooks={books}/>
                </Row>
                <Row className='col-12 col-md-5 order-1 order-md-2'>
                    <SuggestedBookComponent allBooks={books}/>
                </Row>
            </Container>
            <FooterComponent />
        </>
    )
}
