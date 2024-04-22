import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'

export default function AddComment() {
    return (
        <>
            <Container>
                <Row>
                    <Form>
                        <Col xl={5}>
                            <Form.Group className="mb-3" controlId="formGroupRate">
                                <Form.Label>Rate this book</Form.Label>
                                <Form.Control type="number" placeholder="inserisci un voto da 1 a 5" required maxlength={5} minLength={0} />
                            </Form.Group>
                        </Col>
                        <Col xl={5}>
                            <Form.Group className="mb-3" controlId="formGroupComment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control type="text" placeholder="inserisci la tua recensione" />
                            </Form.Group>
                        </Col>
                        <button>Send</button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}