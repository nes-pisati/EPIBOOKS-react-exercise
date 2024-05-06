import { useContext } from "react"
import Styles from "./welcomeComponent.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from "../../contexts/ThemeContext"
import { CategoryProvider } from "../../contexts/BookSelectionContext"

export default function WelcomeComponent() {

    const { isDarkMode } = useContext(ThemeContext)

    return (
        <Container className={isDarkMode ? Styles.isDarkMode : ""} data-testid="welcome-component">
            <Row className="mt-3 d-flex align-items-center">
                <Col xl={6} md={12}>
                    <img src={isDarkMode ? "https://i.pinimg.com/originals/d3/ab/0e/d3ab0eaaebed5552cf7cfdc3308caf38.jpg" : "https://www.theforce.net/2018/yoda-reads.jpg"} className={Styles.heroImg}></img>
                </Col>
                <Col xl={6} md={12}>
                    <h1 className={Styles.title}>{isDarkMode ? "I am your Fa…ntasy Book Shop" : "Your Fantasy Book Shop I am"}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quos, debitis saepe laborum numquam rem, soluta nihil culpa sequi ab, earum ipsam tenetur. Vero nostrum at placeat! Quos, modi distinctio.
                    </p>
                    <div className="d-flex gap-2">
                        <button className={isDarkMode ? Styles.btnDarkStyle : Styles.btnLightStyle} id='fantasy'>Fantasy</button>
                        <button className={isDarkMode ? Styles.btnDarkStyle : Styles.btnLightStyle}>Horror</button>
                        <button className={isDarkMode ? Styles.btnDarkStyle : Styles.btnLightStyle}>History</button>
                        <button className={isDarkMode ? Styles.btnDarkStyle : Styles.btnLightStyle}>Romance</button>
                        <button className={isDarkMode ? Styles.btnDarkStyle : Styles.btnLightStyle}>Science Fiction</button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}