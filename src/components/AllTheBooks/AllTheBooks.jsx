import { Container, Row } from 'react-bootstrap';
import SingleBook from '../SingleBook/SingleBook';


export default function AllTheBooks(props) {

    return (
        <Container>
            <Row className='row-gap-3'>
                {props.allBooks.map((book, i)=>(
                    <SingleBook 
                        index = {i}
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