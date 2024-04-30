import ListGroup from 'react-bootstrap/ListGroup';

export default function CommentList({comments}) {
    return (
        <ListGroup>
            {comments && comments.map(comment => <ListGroup.Item>{comment.comment}</ListGroup.Item>)}
        </ListGroup>
    )
}