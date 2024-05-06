import { useEffect, useState, useContext } from "react"
import CommentList from "../CommentList/CommentList";
import AddComment from "../AddComment/AddComment";

export default function CommentArea({asin}) {

    const URL = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    const [comments, setComments] = useState([])
    const [rerender, setRerender] = useState(false)
    console.log(comments);

    const getComments = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log("errore nel caricamento");
        }
    }

    useEffect(() => {
        getComments()
    }, [rerender])

    const toggleRerender = () => setRerender(!rerender)

    return (
        <>
            <CommentList comments={comments}/>
            <AddComment asin={asin} rerender={toggleRerender}/>
        </>
    )
}