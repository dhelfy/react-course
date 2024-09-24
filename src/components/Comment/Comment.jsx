import styles from "./Comment.module.css"

export default function Comment ({title, content, email, id, ...props}) {
    return(
        <div className={styles.comment} key={id}>
            <h1 className={styles.comment_title}>{title}</h1>
            <p>{content}</p>
            <p>{email}</p>
        </div>
    )
}