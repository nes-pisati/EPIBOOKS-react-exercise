import { Card, Col } from 'react-bootstrap';
import styles from './singleBook.module.css'
import { useEffect, useState } from "react"
import CommentArea from '../CommentArea/CommentArea';


export default function SingleBook(props) {
    
    const [showCommentArea, setShowCommentArea] = useState(false)

    const toggleShowCommentArea = () => {
        setShowCommentArea(!showCommentArea)
    }

    return (
        <Col xs={12} md={4} lg={4}>
            <Card className={styles.cardStyle}>
                <Card.Img variant="top" src={props.img} className={styles.imgStyle} />
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
                    <button className={styles.btnStyle} onClick={toggleShowCommentArea}>Read Feedbacks</button>
                </Card.Body>
            </Card>
            {showCommentArea && (
                <CommentArea asin={props.asin}/>
            )}
        </Col>
    )

}