import ListGroup from 'react-bootstrap/ListGroup';
import Styles from './CommentList.module.css'
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from 'react';

export default function CommentList({comments}) {

    const {isDarkMode} = useContext(ThemeContext)

    return (
        <ListGroup>
            <h5 className={isDarkMode? Styles.ListTitleDark : Styles.ListTitle}>Book reviews: </h5>
            {comments && comments.map(comment => <ListGroup.Item className={Styles.ListItem}>{comment.comment}</ListGroup.Item>)}
        </ListGroup>
    )
}