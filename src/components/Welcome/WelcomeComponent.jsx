import { useContext } from "react"
import Styles from "./welcomeComponent.module.css"
import {Container, Row, Col} from 'react-bootstrap'
import { ThemeContext } from "../../contexts/ThemeContext"

export default function WelcomeComponent() {

    const {isDarkMode} = useContext(ThemeContext)

    return (
        <Container className={isDarkMode? Styles.isDarkMode : ""}>
            <Row className="mt-3 d-flex align-items-center">
                <Col xl={6} md={12}>
                    <img src="https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={Styles.heroImg}></img>
                </Col>
                <Col xl={6} md={12}>
                <h1>Welcome to Epibooks</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quos, debitis saepe laborum numquam rem, soluta nihil culpa sequi ab, earum ipsam tenetur. Vero nostrum at placeat! Quos, modi distinctio.
                Obcaecati, repellendus officia? Facilis quis vel nesciunt nihil praesentium consectetur veniam quasi odit modi, qui totam aliquam aspernatur non quibusdam eius et ullam nam porro accusantium laborum enim. Quidem, quibusdam!</p>
                </Col>
            </Row>

        </Container>
    )
}