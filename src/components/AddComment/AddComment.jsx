import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';

export default function AddComment({asin, rerender}) {

    const URLpost = "https://striveschool-api.herokuapp.com/api/comments/"

    const [formData, setFormData] = useState({})

    const handleInputChange = (e)=> {
        const {name, value} = e.target
        const parsedValue = name==="rate"? Number(value) : value
        setFormData({
            ...formData,
            elementId: asin,
            [name]: parsedValue
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(URLpost, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTM4OTQ3NTYsImV4cCI6MTcxNTEwNDM1Nn0.hj6LGzg2Sf8kNfeR-laInx4u446GbKpudtnQCXGSk-0"
                },
                body: JSON.stringify(formData)
            })
            if (response.ok){
                rerender()
            }
        } catch (error) {
            console.log("Errore nell'invio");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Form onSubmit={onSubmit}>
                        <Col xl={5}>
                            <Form.Group className="mb-3" controlId="formGroupRate">
                                <Form.Label>Rate this book</Form.Label>
                                <Form.Control type="number" placeholder="inserisci un voto da 1 a 5" name="rate" required maxlength={5} minLength={1} onChange={handleInputChange}/>
                            </Form.Group>
                        </Col>
                        <Col xl={5}>
                            <Form.Group className="mb-3" controlId="formGroupComment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control type="text" placeholder="inserisci la tua recensione" name="comment" onChange={handleInputChange}/>
                            </Form.Group>
                        </Col>
                        <button type='submit'>Send</button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}