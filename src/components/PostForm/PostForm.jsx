import CstmInput from "../UI/input/CstmInput";
import CstmButton from "../UI/button/CstmButton";
import styles from "./Form.module.css"
import { useState } from "react";

export default function Form({create}) {
    let [post, setPost] = useState({title: '', content: ''})

    function addNewPost(event) {
        event.preventDefault()
        let newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', content: ''})
      }

    return (
        <>
            <h1>New post</h1>
            <form className={styles.PostForm}>
                <CstmInput placeholder="Title" name="title"
                    inputClass="CstmInput" value={post.title}
                    onChange={function (event) { setPost({...post, title: event.currentTarget.value}) }}
                />

                <CstmInput placeholder="Type your text" name="content"
                    inputClass="CstmInput" value={post.content}
                    onChange={function (event) { setPost({...post, content: event.currentTarget.value}) }}
                />
                <CstmButton BtnColor="white" onClick={(event) => addNewPost(event)}>Create</CstmButton>
            </form>
        </>
    )
}