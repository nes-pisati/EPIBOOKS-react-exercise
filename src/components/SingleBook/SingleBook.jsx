import styles from './singleBook.module.css'
import { Card, Col } from 'react-bootstrap';
import { useContext, useState } from "react"
import CommentArea from '../CommentArea/CommentArea';
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"


export default function SingleBook(props) {

    const [showCommentArea, setShowCommentArea] = useState(false)
    const [book, setBook] = useState({})
    const [isSelected, setIsSelected] = useState(false)
    const {isDarkMode} = useContext(ThemeContext)

    const navigate = useNavigate()

    //const toggleShowCommentArea = () => {
        //setShowCommentArea(!showCommentArea)
    //}

    const toggleIsSelected = () => {
        setIsSelected(!isSelected)
    }

    const getDetails = (asin) => {
        navigate('/details/' + asin)
    }

    return (
        <Col xs={12} md={4} lg={4}>
            <Card className={isDarkMode? styles.cardStyleDark : styles.cardStyleLight} data-testid="book-card">
                <img src={props.img} className={styles.imgStyle} onClick={toggleIsSelected}/>
                <Card.Body className={isSelected? 'd-block' : 'd-none'}>
                    <h6 className={styles.titleStyle}>{props.title}</h6>
                    <Card.Text>
                        {props.category}
                    </Card.Text>
                    <Card.Text>
                        {props.price} €
                    </Card.Text>
                    {/*<Card.Text className={styles.asinStyle}>{props.asin}</Card.Text>*/}
                    {/*<button className={styles.btnStyle} onClick={toggleShowCommentArea}>Read Feedbacks</button>*/}
                    <button className={styles.btnStyle} onClick={() => getDetails(props.asin)}>Discover more</button>
                </Card.Body>
            </Card>
            {showCommentArea && (
                <CommentArea asin={props.asin} />
            )}
        </Col>
    )

}