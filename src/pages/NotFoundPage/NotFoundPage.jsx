import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import Styles from './NotFoundPage.module.css'

export default function NotFoundPage() {

    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }

    return (
        <> 
            <Container className='mt-5'>
                <Row className='d-flex align-items-center '>
                    <Col xs={6}>
                        <h5 className={Styles.textStyle}>OPS, something went wrong</h5>
                        <button onClick={goBack} className={Styles.btnStyle}>Go back to Aldeeran</button>
                    </Col>
                    <Col xs={6}>
                        <img src='https://cdn.webshopapp.com/shops/321862/files/428248504/image.jpg' alt='404 image' className={Styles.imgStyle}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
