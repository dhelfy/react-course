import CstmButton from "../UI/button/CstmButton"
import styles from "./Post.module.css"

export default function Post(props) {
    return (
        <>
            <div className={styles.Post}>
                <h2 className={styles.PostTitle}>{props.post_info.title}</h2>
                <p className={styles.PostContent}>{props.post_info.body}</p>
                {/*Удаляем пост по клику, deletePost берем из App.js*/}
                <div className={styles.buttons_wrapper}>
                    <CstmButton onClick={() => props.deletePost(props.post_info)}>
                        Delete
                    </CstmButton>
                    <CstmButton onClick={() => props.openPost(props.post_info.id)}>
                        Open
                    </CstmButton>
                </div>
            </div>
        </>
    )
}