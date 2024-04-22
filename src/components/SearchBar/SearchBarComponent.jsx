import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export default function SearchBar(props) {

    const [input, setInput] = useState('')

    const handleChangeInput = (e) => {
        if (e.target.value === "") {
            props.setBooks(props.booksInit)
        }
        
        setInput(e.target.value)
    }

    const filterBooks = () => {
        const filterByTerm = props.allBooks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
        props.setBooks(filterByTerm)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-between my-3">
                        <input type="text" className='w-100' onChange={handleChangeInput}/>
                        <button onClick={filterBooks}>Cerca</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

//18- Al onChange esegui la funzione handleChangeInput

//9-    funzione handleChangeInput che prende come parametro l'evento "e" (onChange)
//      al suo interno richiama setInput (che è la funzione che gestisce dello stato) che 