import React, { useContext, useEffect, useState } from 'react'
import Styles from './SuggestedBook.module.css'
import { ThemeContext } from "../../contexts/ThemeContext"
import { useNavigate } from 'react-router-dom'

export default function SuggestedBookComponent(props) {

    const totalBooks = props.allBooks.length
    const number = Math.floor(Math.random() * totalBooks)
    const [comments, setComments] = useState([])

    const navigate = useNavigate()

    const { isDarkMode } = useContext(ThemeContext)

    const URL = `https://striveschool-api.herokuapp.com/api/books/${props.allBooks[number].asin}/comments/`
    const getComments = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getComments()
    }, [])
    console.log(comments);

    const getDetails = (asin) => {
        navigate('/details/' + asin)
    }



    return (
        <>
            <div className={isDarkMode ? Styles.isDarkMode : ""}>
                <h5 className={Styles.title}>Book of the Day!</h5>
                <div className='d-flex align-items-center gap-5'>
                    <img src={props.allBooks[number].img} alt='' className={Styles.img} />
                    <div>
                        <p className={Styles.bookTitle}>{props.allBooks[number].title} </p>
                        {/*<button className={Styles.btn} onClick={() => getDetails(props.allBooks.asin)}>Discover more</button>*/}
                    </div>
                </div>
            </div>
        </>
    )
}