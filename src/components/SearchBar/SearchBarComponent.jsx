import { useContext, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Styles from './SearchBarComponent.module.css'
import { ThemeContext } from "../../contexts/ThemeContext"

export default function SearchBar(props) {

    const [input, setInput] = useState('')
    const {isDarkMode} = useContext(ThemeContext)

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
                <Col xs={12} md={6}>
                    <div className="d-flex justify-content-between my-3 gap-1">
                        <input type="text" data-testid='searchbar-input' className={Styles.searchBarStyle} onChange={handleChangeInput}/>
                        <button onClick={filterBooks} className={isDarkMode? Styles.btnDarkStyle : Styles.btnLightStyle}>Cerca</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

//18- Al onChange esegui la funzione handleChangeInput

//9-    funzione handleChangeInput che prende come parametro l'evento "e" (onChange)
//      al suo interno richiama setInput (che è la funzione che gestisce dello stato) che 