import { useNavigate, useParams } from "react-router-dom"
import PostService from "../../API/PostService"
import { useState } from "react"
import { useEffect } from "react"
import { useFetching } from "../../hooks/useFetching"
import Loader from "../../components/UI/loader/Loader"
import Post from "../../components/Post/Post"
import styles from "./PostPage.module.css"
import CstmButton from "../../components/UI/button/CstmButton"
import Comment from "../../components/Comment/Comment"
import CommentList from "../../components/CommentsList"

export default function PostPage() {
    // получаем параметры из url
    let params = useParams()
    // подключаем навигацию по истории
    let navigate = useNavigate()
    let goBack = () => {navigate("/blog")}

    let [post, setPost] = useState({})
    let [comments, setComments] = useState([])

    let [commentsLoading, commentsError, fetchComments] = useFetching(async () => {
        let response = await PostService.getComments(params.id)
        setComments(response.data)
    })

    // получаем пост по нужному айдишнику через useFetching
    let [postLoading, postError, fetchPost] = useFetching(async () => {
        let response = await PostService.getOne(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])

    return (
        <>
            {postLoading && <Loader />}
            <div className={styles.post_wrapper}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <CstmButton BtnColor="white" onClick={() => {goBack()}}>
                    Go Back
                </CstmButton>
                <h1>Comments</h1>
                <CommentList comments={comments}/>
            </div>
        </>
    )
}