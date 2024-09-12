import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="about" className={styles.link}>About</Link>
                <Link to="blog" className={styles.link}>Blog</Link>
            </nav>
        </>
    )
}