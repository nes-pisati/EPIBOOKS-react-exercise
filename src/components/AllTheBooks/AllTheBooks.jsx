import { Container, Row } from 'react-bootstrap';
import Fantasy from '../../books/fantasy.json';
import SingleBook from '../SingleBook/SingleBook';



export default function AllTheBooks(props) {
    return (
        <Container>
            <Row>
                {props.allBooks.map((book)=>(
                    <SingleBook 
                        key= {book.asin} 
                        img = {book.img}
                        title = {book.title}
                        category = {book.category}
                        price = {book.price}
                        asin = {book.asin} 
                    />
                ))}
            </Row>
        </Container>
    )
}