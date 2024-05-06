import React, { startTransition, useContext } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Styles from './BookDetails.module.css'
import CommentArea from '../CommentArea/CommentArea';
import { ThemeContext } from "../../contexts/ThemeContext"

export default function BookDetailsComponent(props) {

    console.log(props.comments);
    const {isDarkMode} = useContext(ThemeContext)

    return (
        <>
            <Container className='mb-3'>
                <Row className='mt-5 d-flex align-items-center'>
                    <Col sm={12} md={6}>
                        <img src={props.book.img} alt='Book cover' className={Styles.imgStyle} />
                    </Col>
                    <Col>
                        <h5 className={isDarkMode? Styles.BookTitleDark : Styles.BookTitle}>{props.book.title}</h5>
                        <p className={Styles.Price}>Price: {props.book.price} €</p>
                        <CommentArea asin={props.book.asin}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
