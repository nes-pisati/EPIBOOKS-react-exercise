import React, {useEffect, useState} from 'react'
import NavbarComponent from '../../components/Navbar/NavbarComponent'
import { useParams } from 'react-router-dom'
import Fantasy from '../../books/fantasy.json';
import BookDetailsComponent from '../../components/BookDetails/BookDetailsComponent';
import CommentArea from '../../components/CommentArea/CommentArea';

export default function BookDetail() {

    const {asin} = useParams()
    const commentURL = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
    
    const [comments, setComments] = useState([])

    let selectedBook = {}

    const booksMap = Fantasy.map((book) => {
        if (book.asin === asin) {
            selectedBook = book
            return
        }
    })

    const getComments = async () => {
        try {
            const response = await fetch(commentURL)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getComments()
    }, [])

    //console.log(selectedBook);

    return (
        <>
            <NavbarComponent />
            <BookDetailsComponent book={selectedBook} comments={comments}/>
        </>
    )
}
