import React, {useContext, useEffect} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { ThemeContext } from '../../contexts/ThemeContext';

export default function NavbarComponent() {
    
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
                    <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Browse</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button onClick={toggleIsDarkMode}>
                            {isDarkMode? "Light Mode" : "Dark Mode"}
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}