import ListGroup from 'react-bootstrap/ListGroup';

export default function CommentList(props) {
    return (
        <ListGroup>
            <ListGroup.Item>{props.comment}</ListGroup.Item>
        </ListGroup>
    )
}