import { Card, Col } from 'react-bootstrap';
import styles from './singleBook.module.css'
import { useState } from "react"


export default function SingleBook(props) {

    //const [asin, setAsin] = useState(0)
    
    return (
        <Col xs={12} md={3} lg={3}>
            <Card className={styles.cardStyle}>
                <Card.Img variant="top" src={props.img} className={styles.imgStyle}/>
                <Card.Body>
                    <Card.Title className={styles.titleStyle}>{props.title}</Card.Title>
                    <Card.Text>
                        {props.category}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Card.Text className={styles.asinStyle}>
                        {props.asin}
                    </Card.Text>
                    <button className={styles.btnStyle}>Read Feedbacks</button>
                </Card.Body>
            </Card>
        </Col>
    )

}