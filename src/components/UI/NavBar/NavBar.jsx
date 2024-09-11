import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link to="posts" className={styles.link}>Posts</Link>
                <Link to="about" className={styles.link}>About</Link>
            </nav>
        </>
    )
}