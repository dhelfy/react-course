import { useNavigate, useParams } from "react-router-dom"
import PostService from "../../API/PostService"
import { useState } from "react"
import { useEffect } from "react"
import { useFetching } from "../../hooks/useFetching"
import Loader from "../../components/UI/loader/Loader"
import Post from "../../components/Post/Post"
import styles from "./PostPage.module.css"
import CstmButton from "../../components/UI/button/CstmButton"

export default function PostPage() {
    // получаем параметры из url
    let params = useParams()
    // подключаем навигацию по истории
    let navigate = useNavigate()
    let goBack = () => {navigate(-1)}
    let [post, setPost] = useState({})
    // получаем пост по нужному айдишнику через useFetching
    let [postLoading, postError, fetchPost] = useFetching(async () => {
        let response = await PostService.getOne(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPost()
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
            </div>
        </>
    )
}