import { useEffect, useState } from "react"
import CommentList from "../CommentList/CommentList";
import AddComment from "../AddComment/AddComment";

//const URL = "https://striveschool-api.herokuapp.com/api/books/" // :asin/comments/
const URLprova = "https://striveschool-api.herokuapp.com/api/books/0316438960/comments/"

export default function CommentArea() {

    /*useEffect(()=> {
    fetch(URL + asin + "/comments/")
    .then(json => {
        setComments(json);
        })
    })*/

    const [comments, setComments] = useState([])
    console.log(comments);

    useEffect(() => {
        fetch(URLprova)
        .then (response => response.json())
        .then(json => {
            setComments(json);
        })
    })

    return (
        <>
            <CommentList />
            <AddComment />
        </>
    )
}