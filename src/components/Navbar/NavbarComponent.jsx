import React, {useContext, useEffect} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import Styles from "./NavbarComponent.module.css"

export default function NavbarComponent() {

    const LightIcon = "bi bi-moon-stars"
    const DarkIcon = "bi bi-brightness-high"
    
    const {isDarkMode, toggleIsDarkMode} = useContext(ThemeContext)
    console.log(isDarkMode);
    
    const changeBg = () => {
        isDarkMode? document.body.classList.add("bg-dark") : document.body.classList.remove("bg-dark")
    }

    useEffect(()=>{
        changeBg()
    },[isDarkMode])
    
    return (
        <>
            <Navbar bg={isDarkMode? "light" : "dark"} data-bs-theme={isDarkMode? "light" : "dark"}>
                <Container>
                    <Navbar.Brand>Epibooks</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                    </Nav>
                    <Nav>
                        <button onClick={toggleIsDarkMode} className={Styles.btn}>
                            <i className={isDarkMode? DarkIcon : LightIcon}></i>
                        </button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}